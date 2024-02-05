'use client';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import { BuilderContent } from '@builder.io/sdk';
import '../builder-registry';
import { builder } from '@builder.io/react';

interface BuilderPageProps {
     content?: BuilderContent;
}

// Builder Public API Key set in .env file
export const initializedBuilder = builder.init(
     process.env.NEXT_PUBLIC_BUILDER_API_KEY as string,
);

export function RenderBuilderContent({ content }: BuilderPageProps) {
     // Call the useIsPreviewing hook to determine if
     // the page is being previewed in Builder
     const isPreviewing = useIsPreviewing();
     // If "content" has a value or the page is being previewed in Builder,
     // render the BuilderComponent with the specified content and model props.
     if (content || isPreviewing) {
          return <BuilderComponent content={content} model="page" />;
     }
     // If the "content" is falsy and the page is
     // not being previewed in Builder, render the
     // DefaultErrorPage with a 404.
     return <DefaultErrorPage statusCode={404} />;
}
