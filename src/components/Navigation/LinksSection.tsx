import React from 'react';
import { BuilderContent } from '@builder.io/sdk';
import CustomLink from './CustomLink';
import styles from './navigation.module.css';

type NavModelsName = {
     1: 'nav-links-1';
     2: 'nav-links-2';
     3: 'nav-links-3';
};

type LinksSectionPropTypes = {
     currentKey: keyof NavModelsName;
     linksData: BuilderContent[] | null;
     handleCloseNav: () => void;
     getRefIds: (link: BuilderContent | null) => string[] | undefined;
     setRefIds: React.Dispatch<React.SetStateAction<string[] | undefined>>;
     handleClickLink: (link: BuilderContent) => void;
     clickedStr: string;
     setNavLinksIndex: React.Dispatch<
          React.SetStateAction<keyof NavModelsName>
     >;
};

export default function LinksSection(props: LinksSectionPropTypes) {
     const {
          linksData,
          handleCloseNav,
          getRefIds,
          setRefIds,
          setNavLinksIndex,
          currentKey,
          clickedStr,
          handleClickLink,
     } = props;

     return (
          <div className={styles.navNestedContent}>
               {linksData?.map((link) => {
                    if (link.data?.path) {
                         return (
                              <CustomLink
                                   key={`__${Math.random() * 1000}`}
                                   label={link.data?.label}
                                   href={link.data?.path}
                                   handleClose={handleCloseNav}
                              />
                         );
                    }

                    const refs = getRefIds(link);

                    return (
                         <span
                              className={`${
                                   clickedStr === link?.data?.label
                                        ? styles.activeLink
                                        : ''
                              }`}
                              onClick={() => {
                                   setRefIds(refs);
                                   handleClickLink(link);
                                   setNavLinksIndex(
                                        Number(
                                             Number(currentKey) + 1,
                                        ) as keyof NavModelsName,
                                   );
                              }}
                              key={`__${Math.random() * 1000}`}
                         >
                              {link?.data?.label}
                         </span>
                    );
               })}
          </div>
     );
}
