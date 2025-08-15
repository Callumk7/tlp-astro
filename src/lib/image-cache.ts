import { Client } from "@notionhq/client";
import { v2 as cloudinary } from "cloudinary";
import type { PiggyProperties } from "./notion/get-entries";
import {
	extractCachedAt,
	extractCloudinaryUrl,
	extractImage,
	extractName,
} from "./notion/helpers";

// Simplified pig interface for easier use in components
export interface Pig {
	id: string;
	name: string;
	image?: string;
	cloudinary_url?: string;
	image_cached_at?: string;
	healthChecked: boolean;
	neutered?: string;
	status?: string;
	sex?: string;
	companionship?: string;
	description: string;
	age: string;
}

export interface CloudinaryUploadResult {
	secure_url: string;
	public_id: string;
}

cloudinary.config({
	cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.CLOUDINARY_KEY,
	api_secret: import.meta.env.CLOUDINARY_SECRET,
});

const notion = new Client({ auth: import.meta.env.NOTION_KEY });

export async function getCachedImageUrl(
	pigId: string,
	properties: PiggyProperties,
): Promise<string | null> {
	const name = extractName(properties);
	const image = extractImage(properties);
	const cloudinaryUrl = extractCloudinaryUrl(properties);

	// If we have a cached Cloudinary URL, use it
	if (cloudinaryUrl) {
		console.log(`✅ Using cached image for ${name}`);
		return cloudinaryUrl;
	}

	// Otherwise, upload to Cloudinary and cache it
	if (image) {
		try {
			console.log(`📤 Uploading image for ${name} to Cloudinary...`);

			const result = (await cloudinary.uploader.upload(image, {
				public_id: `pigs/${pigId}`,
				folder: "guinea-pigs",
				overwrite: true,
				resource_type: "image",
				transformation: [
					{
						quality: "auto",
						fetch_format: "auto",
						width: 1200,
						height: 800,
						crop: "limit",
					},
				],
			})) as CloudinaryUploadResult;

			// Update Notion with the cached URL
			await updateNotionCache(pigId, result.secure_url);

			console.log(`✅ Successfully cached image for ${name}`);
			return result.secure_url;
		} catch (error) {
			console.error(`❌ Failed to cache image for ${name}:`, error);
			return image; // Fallback to original image
		}
	}

	console.log(`⚠️ No image found for ${name}`);
	return null;
}

async function updateNotionCache(
	pigId: string,
	cloudinaryUrl: string,
): Promise<void> {
	try {
		await notion.pages.update({
			page_id: pigId,
			properties: {
				CloudinaryURL: {
					url: cloudinaryUrl,
				},
				CachedAt: {
					date: {
						start: new Date().toISOString(),
					},
				},
			},
		});
	} catch (error) {
		console.error("Failed to update Notion cache:", error);
	}
}

export type ProcessedPig = Pig & { cachedImageUrl: string | null };

// Batch process multiple pigs
export async function processPigsWithCachedImages(
	pigsData: Array<{ id: string; properties: PiggyProperties }>,
): Promise<ProcessedPig[]> {
	const results = await Promise.allSettled(
		pigsData.map(async (pigData) => {
			const pig: Pig = {
				id: pigData.id,
				name: extractName(pigData.properties),
				image: extractImage(pigData.properties),
				cloudinary_url: extractCloudinaryUrl(pigData.properties),
				image_cached_at: pigData.properties.CachedAt.date?.start,
				healthChecked: pigData.properties["Health Checked"].checkbox,
				neutered: pigData.properties.Neutered.select?.name,
				status: pigData.properties.Status.status?.name,
				sex: pigData.properties.Sex.select?.name,
				companionship: pigData.properties.Companionship.select?.name,
				description:
					pigData.properties.Description.rich_text
						?.map((item) => item.plain_text)
						.join("") || "",
				age:
					pigData.properties.Age.rich_text
						?.map((item) => item.plain_text)
						.join("") || "",
			};

			const cachedImageUrl = await getCachedImageUrl(
				pigData.id,
				pigData.properties,
			);

			return {
				...pig,
				cachedImageUrl,
			};
		}),
	);

	return results.map((result, index) => {
		if (result.status === "fulfilled") {
			return result.value;
		} else {
			console.error(
				`Failed to process image for pig at index ${index}:`,
				result.reason,
			);
			const pigData = pigsData[index];
			return {
				id: pigData.id,
				name: extractName(pigData.properties),
				image: extractImage(pigData.properties),
				cloudinary_url: extractCloudinaryUrl(pigData.properties),
				image_cached_at: pigData.properties.CachedAt.date?.start,
				healthChecked: pigData.properties["Health Checked"].checkbox,
				neutered: pigData.properties.Neutered.select?.name,
				status: pigData.properties.Status.status?.name,
				sex: pigData.properties.Sex.select?.name,
				companionship: pigData.properties.Companionship.select?.name,
				description:
					pigData.properties.Description.rich_text
						?.map((item) => item.plain_text)
						.join("") || "",
				age:
					pigData.properties.Age.rich_text
						?.map((item) => item.plain_text)
						.join("") || "",
				cachedImageUrl: extractImage(pigData.properties) || null,
			};
		}
	});
}
