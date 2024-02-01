import { RenderBuilderContent } from '../../components/builder';
import { builder } from '@builder.io/sdk';

interface PageProps {
     params: {
          page: string[];
     };
}
// Located in [...page]/page.tsx
export default async function Home(props: PageProps) {
     const content = await builder
          // Get the page content from Builder with the specified options
          .get('page', {
               userAttributes: {
                    // Use the page path specified in the URL to fetch the content
                    urlPath: '/' + (props?.params?.page?.join('/') || ''),
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
