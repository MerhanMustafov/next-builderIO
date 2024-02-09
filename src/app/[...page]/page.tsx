import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { useGetBuilderPageContent } from "@/hooks/useGetBuilderPageContent";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const urlPath = "/" + (props?.params?.page?.join("/") || "");
  const { content, model } = await useGetBuilderPageContent("page", urlPath);

  return <RenderBuilderContent content={content} model={model} />;
}
