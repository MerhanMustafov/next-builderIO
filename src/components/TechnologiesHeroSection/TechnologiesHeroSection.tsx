/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import styles from './technologiesHeroSection.module.css';
import useScreenSize from '@/hooks/useScreenSize';
import { builder } from '@builder.io/sdk';
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

interface TechnologiesHeroSectionProps {
     title: string;
     subtitle: string;
     image: string | null;
}

export default function TechnologiesHeroSection(
     props: TechnologiesHeroSectionProps,
) {
     const { image, subtitle, title } = props;
     const { isWindow } = useScreenSize();
     const [_imgStr, setImgStr] = useState<string | null>(null);

     useEffect(() => {
          builder
               .get('image')
               .toPromise()
               .then((res) =>
                    setImgStr(image ?? res.data.technologiesHeroSectionImage),
               )
               .catch(() => setImgStr(image ?? null));
     }, [image]);

     if (!_imgStr) {
          return null;
     }

     return (
          <div
               className={styles.wrapper}
               style={{
                    backgroundImage: `url(${image ?? _imgStr})`,
                    backgroundSize: 'cover',
               }}
          >
               <div
                    className={`${
                         isWindow ? styles.contentWindow : styles.contentMobile
                    }`}
               >
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
               </div>
          </div>
     );
}
