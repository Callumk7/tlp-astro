import type { PiggyProperties } from "./get-entries";

export function extractName(properties: PiggyProperties): string {
	return properties.Name.title?.[0]?.plain_text || "Unnamed";
}

export function extractImage(properties: PiggyProperties): string | undefined {
	return properties.Picture.files?.[0]?.file?.url || undefined;
}

export function extractCloudinaryUrl(
	properties: PiggyProperties,
): string | undefined {
	return properties.CloudinaryURL.url || undefined;
}

export function extractCachedAt(
	properties: PiggyProperties,
): string | undefined {
	return properties.CachedAt.date || undefined;
}

export function extractDescription(properties: PiggyProperties): string {
	return (
		properties.Description.rich_text
			?.map((item) => item.plain_text)
			.join("") || ""
	);
}

export function extractAge(properties: PiggyProperties): string {
	return (
		properties.Age.rich_text?.map((item) => item.plain_text).join("") || ""
	);
}

export function extractHealthChecked(properties: PiggyProperties): boolean {
	return properties.HealthChecked.checkbox;
}

export function extractNeutered(
	properties: PiggyProperties,
): string | undefined {
	return properties.Neutered.select?.name || undefined;
}

export function extractStatus(properties: PiggyProperties): string | undefined {
	return properties.Status.status?.name || undefined;
}

export function extractSex(properties: PiggyProperties): string | undefined {
	return properties.Sex.select?.name || undefined;
}

export function extractCompanionship(
	properties: PiggyProperties,
): string | undefined {
	return properties.Companionship.select?.name || undefined;
}
