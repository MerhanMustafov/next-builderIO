import { useGetBuilderPageContent } from '@/hooks/useGetBuilderPageContent';
import { RenderBuilderContent } from '../../components/builder';

interface PageProps {
     params: {
          page: string[];
     };
}

export default async function EditSymbol(props: PageProps) {
     const urlPath = '/' + (props?.params?.page?.join('/') || '');
     const { content, model } = await useGetBuilderPageContent(
          'symbol',
          urlPath,
     );

     return <RenderBuilderContent content={content} model={model} />;
}
