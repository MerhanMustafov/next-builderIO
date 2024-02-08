import { builder, BuilderContent } from "@builder.io/sdk";

type ModelType = "page" | "symbol" | "section" | "image";

type GetPageContentReturnType = {
  content: BuilderContent;
  model: ModelType;
};

export async function useGetBuilderPageContent<T extends ModelType, U extends string, O extends any>(
  model: T,
  urlPath: U,
  options?: O
): Promise<GetPageContentReturnType> {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get(model, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath,
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return { content, model };
}
