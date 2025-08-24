import { Client } from '@notionhq/client';

const getCountOfEntriesFromDatabase = async (notion2, databaseId) => {
  const database = await notion2.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: {
        equals: "Available"
      }
    }
  });
  return database.results.length;
};
const notion = new Client({
  auth: "secret_3V9vMGDiOa9AoOqm3RI53ildxvKcKFbzKJHImhfhCiF"
});
async function getPigsData(statusFilter) {
  const queryOptions = {
    database_id: "e1097a2fed6e40e0a817f00c02664361",
    sorts: [
      {
        property: "Name",
        direction: "ascending"
      }
    ]
  };
  {
    queryOptions.filter = {
      property: "Status",
      status: {
        equals: statusFilter
      }
    };
  }
  const response = await notion.databases.query(queryOptions);
  return response.results.map((page) => ({
    id: page.id,
    properties: page.properties
  }));
}

export { getPigsData as a, getCountOfEntriesFromDatabase as g };
