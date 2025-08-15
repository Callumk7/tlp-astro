import { Client, isFullPageOrDatabase } from "@notionhq/client";

export type PiggyProperties = {
	id: {
		id: string;
		type: "unique_id";
		unique_id: {
			prefix: string | null;
			number: number;
		};
	};
	Name: {
		id: string;
		type: "title";
		title: {
			type: "text";
			text: {
				content: string;
				link: string | null;
			};
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: string;
			};
			plain_text: string;
			href: string | null;
		}[];
	};
	"Health Checked": {
		id: string;
		type: "checkbox";
		checkbox: boolean;
	};
	Neutered: {
		id: string;
		type: "select";
		select: {
			id: string;
			name: string;
			color: string;
		};
	};
	Status: {
		id: string;
		type: "status";
		status: {
			id: string;
			name: string;
			color: string;
		};
	};
	Picture: {
		id: string;
		type: "files";
		files: {
			name: string;
			type: "file";
			file: {
				url: string;
				expiry_time: string | null;
			};
		}[];
	};
	Sex: {
		id: string;
		type: "select";
		select: {
			id: string;
			name: string;
			color: string;
		};
	};
	Companionship: {
		id: string;
		type: "select";
		select: {
			id: string;
			name: string;
			color: string;
		};
	};
	Description: {
		id: string;
		type: "rich_text";
		rich_text: {
			type: "text";
			text: {
				content: string;
				link: string | null;
			};
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: string;
			};
			plain_text: string;
			href: string | null;
		}[];
	};
	Age: {
		id: string;
		type: "rich_text";
		rich_text: {
			text: {
				content: string;
				link: string | null;
			};
			annotations: {
				bold: boolean;
				italic: boolean;
				strikethrough: boolean;
				underline: boolean;
				code: boolean;
				color: string;
			};
			plain_text: string;
			href: string | null;
		}[];
	};
	url: string;
	public_url: string | null;
	CloudinaryURL: {
		id: string;
		type: "url";
		url: string | null;
	};
	CachedAt: {
		id: string;
		type: "date";
		date: {
			start: string;
			end: string | null;
			time_zone: string | null;
		} | null;
	};
};

export const getEntriesFromDatabase = async (
	notion: Client,
	databaseId: string,
) => {
	const database = await notion.databases.query({
		database_id: databaseId,
	});

	// If there are no results, return an empty array.
	if (database.results.length === 0) {
		return [];
	}

	const piggies: PiggyProperties[] = [];
	// Loop through the results and push the data into the array.
	// First we use notion's type guard to check if the result is a page or a database.
	for (const result of database.results) {
		if (!isFullPageOrDatabase(result)) {
			continue;
		}

		// We are only interested in pages, I don't think anything else will show, but just in case.
		if (result.object === "page") {
			// We know the shape of the properties, so we can cast it to the correct type.
			// This is a bit of a hack, but it works.. as long as the properties have not changed in Notion.
			const properties = result.properties as unknown as PiggyProperties;
			piggies.push(properties);
		}
	}
	return piggies;
};

export const getCountOfEntriesFromDatabase = async (
	notion: Client,
	databaseId: string,
) => {
	const database = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Status",
			status: {
				equals: "Available",
			},
		},
	});

	return database.results.length;
};

const notion = new Client({
	auth: import.meta.env.NOTION_KEY,
});

export async function getPigsData(
	statusFilter?: string,
): Promise<Array<{ id: string; properties: PiggyProperties }>> {
	const queryOptions: any = {
		database_id: import.meta.env.DATABASE_ID!,
		sorts: [
			{
				property: "Name",
				direction: "ascending",
			},
		],
	};

	if (statusFilter) {
		queryOptions.filter = {
			property: "Status",
			status: {
				equals: statusFilter,
			},
		};
	}

	const response = await notion.databases.query(queryOptions);

	return response.results.map((page: any) => ({
		id: page.id,
		properties: page.properties as PiggyProperties,
	}));
}
