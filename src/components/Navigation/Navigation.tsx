import { client, gql } from "@/apollo";
import ClientNavigation from "./ClientNavigation";
import { builder } from "@builder.io/sdk";

// NOTE: problem with the GQL caching (newly created cms model is not being fetched)
async function getNavData() {
  return await client.query({
    fetchPolicy: "no-cache",
    query: gql`
      {
        navLinks1 {
          id
          name
          data {
            path
            label
            nested
          }
        }
        navLinks2 {
          id
          name
          data {
            path
            label
            nested
          }
        }
        navLinks3 {
          id
          name
          data {
            path
            label
            nested
          }
        }
        navLinks4 {
          id
          name
          data {
            path
            label
          }
        }
      }
    `,
  });
}

const getData = async () => {
  const res = await Promise.all([
    builder.getAll("nav-links-1", { enrich: true }),
    builder.getAll("nav-links-2", { enrich: true }),
    builder.getAll("nav-links-3", { enrich: true }),
    builder.getAll("nav-links-4", { enrich: true }),
  ]);
  return res;
};
export default async function Navigation() {
  // There is a problem with the GQL caching=
  // The newly created cms model is not being fetched (returned)
  // whereas the fetch with the builder.io sdk is working fine

  // GQL Method
  //   const {
  //     data: { navLinks1, navLinks2, navLinks3, navLinks4 },
  //   } = await getNavData();

  // Builder.io Method
  const [navLinks1, navLinks2, navLinks3, navLinks4] = await getData();

  return (
    <ClientNavigation
      l1={navLinks1}
      l2={navLinks2}
      l3={navLinks3}
      l4={navLinks4}
      logo={
        "https://cdn.builder.io/api/v1/image/assets%2F9a41098f7b034bc69ea3e94d13345db8%2Facc2d3700e704164b3d78478c746fa40"
      }
    />
  );
}
