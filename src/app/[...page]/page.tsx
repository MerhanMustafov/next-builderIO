import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init('9a41098f7b034bc69ea3e94d13345db8');

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Home(props: PageProps) {
  const content = await builder
  // Get the page content from Builder with the specified options
  .get("page", {
    userAttributes: {
      // Use the page path specified in the URL to fetch the content
      urlPath: "/" + (props?.params?.page?.join("/") || ""),
    },
  })
  // Convert the result to a promise
  .toPromise();
  return (
    <>
    {/* Render the Builder page */}
    <RenderBuilderContent content={content} />
  </>
  );
}
