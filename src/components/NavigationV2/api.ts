import { client, gql } from "@/apollo";
import { builder } from "@builder.io/sdk";

export async function getNavDataGQL() {
  return await client.query({
    fetchPolicy: "no-cache",
    query: gql`
      {
        navLevelTop {
          id
          name
          data {
            url
            nested
            label
          }
        }
        navLevel1 {
          id
          name
          data {
            url
            nested
            label
          }
        }
      }
    `,
  });
}

export const getDataBuilderFetch = async () => {
  const res = await Promise.all([
    builder.getAll("nav-level-top", { enrich: true }),
    builder.getAll("nav-level-1", { enrich: true }),
    builder.getAll("nav-level-2", { enrich: true }),
  ]);
  return res;
};
