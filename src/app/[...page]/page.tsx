import { RenderBuilderContent } from "../../components/builder";
import { useGetBuilderPageContent } from "@/hooks/useGetBuilderPageContent";

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
