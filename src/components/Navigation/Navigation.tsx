/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Logo from '../../../public/accedia-logo.svg';
import styles from './navigation.module.css';
import { CgMenuLeft } from 'react-icons/cg';
import { builder, BuilderContent } from '@builder.io/sdk';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import LinksSection from './LinksSection';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

type RefLink = {
     refLink: {
          id: string;
     };
};
type ILinksState = {
     1: BuilderContent[] | null;
     2: BuilderContent[] | null;
     3: BuilderContent[] | null;
};

const linksInitState: ILinksState = {
     1: null,
     2: null,
     3: null,
};

type NavModelsName = {
     1: 'nav-links-1';
     2: 'nav-links-2';
     3: 'nav-links-3';
};

const modelsLookUp: NavModelsName = {
     1: 'nav-links-1',
     2: 'nav-links-2',
     3: 'nav-links-3',
};

export default function Navigation() {
     const [show, setShow] = useState(false);
     const [links, setLinks] = useState<ILinksState>(linksInitState);
     const [navLinksIndex, setNavLinksIndex] = useState<keyof NavModelsName>(1);
     const [refIds, setRefIds] = useState<string[] | undefined>(undefined);
     const [clickedStr, setClickedStr] = useState<string>('');

     useEffect(() => {
          if (navLinksIndex === 1) {
               setRefIds(undefined);
               builder
                    .getAll(modelsLookUp[navLinksIndex], { cache: false })
                    .then((modelLinks) => {
                         setLinks({
                              ...linksInitState,
                              [navLinksIndex]: modelLinks,
                         });
                    })
                    .catch((error) => console.error(error));
          } else {
               builder
                    .getAll(modelsLookUp[navLinksIndex], { cache: false })
                    .then((modelLinks) => {
                         const res = modelLinks.filter((link) => {
                              if (refIds?.length) {
                                   if (link.id) return refIds.includes(link.id);
                                   return false;
                              }
                              return false;
                         });
                         const x = res.length ? res : null;
                         setLinks((prev) => ({
                              ...prev,
                              [navLinksIndex]: x,
                         }));
                    })
                    .catch((error) => console.error(error));
          }
     }, [navLinksIndex, clickedStr]);

     const handleCloseNav = () => {
          setShow(false);
     };

     const handleOpenNav = () => {
          setShow(true);
     };

     const toggleNav = () => {
          setShow(!show);
     };

     const getRefIds = (link: BuilderContent | null) => {
          const data = link?.data?.nested as RefLink[] | undefined;
          if (data) {
               return data?.reduce((acc, curr) => {
                    return [...acc, curr.refLink.id];
               }, [] as string[]);
          }
          return undefined;
     };

     const handleClickLink = (link: BuilderContent) => {
          setClickedStr(link?.data?.label || '');
     };
     return (
          <nav
               style={{
                    background: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '30px',
                    alignItems: 'center',
                    padding: '20px',
               }}
          >
               {show && links && (
                    <>
                         <div
                              className={styles.clickAwayBackground}
                              onClick={handleCloseNav}
                         />
                         <div className={styles.navDrawer}>
                              <IoMdClose
                                   onClick={handleCloseNav}
                                   className={styles.closeDrawerButton}
                              />

                              <Image src={Logo} width={150} alt="logo" />

                              <div className={styles.navContent}>
                                   {Object.entries(links).map(([k, lData]) => {
                                        if (Number(k) > navLinksIndex) {
                                             return null;
                                        }
                                        return (
                                             <LinksSection
                                                  key={`${
                                                       Math.random() * 10000
                                                  }__${k}`}
                                                  currentKey={
                                                       Number(
                                                            k,
                                                       ) as keyof NavModelsName
                                                  }
                                                  linksData={lData}
                                                  getRefIds={getRefIds}
                                                  setRefIds={setRefIds}
                                                  handleClickLink={
                                                       handleClickLink
                                                  }
                                                  clickedStr={clickedStr}
                                                  setNavLinksIndex={
                                                       setNavLinksIndex
                                                  }
                                                  handleCloseNav={
                                                       handleCloseNav
                                                  }
                                             />
                                        );
                                   })}
                              </div>
                         </div>
                    </>
               )}
               <Image src={Logo} width={150} alt="logo" />
               <ul
                    style={{
                         display: 'flex',
                         flexDirection: 'row',
                         listStyle: 'none',
                         justifyContent: 'center',
                         alignItems: 'center',
                    }}
               >
                    {!show && (
                         <CgMenuLeft
                              color="white"
                              size={30}
                              style={{
                                   cursor: 'pointer',
                                   margin: '10px 0 0 0',
                              }}
                              onClick={handleOpenNav}
                         />
                    )}
               </ul>
          </nav>
     );
}
