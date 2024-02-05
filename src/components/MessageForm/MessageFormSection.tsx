'use client';
import styles from './messageFormSection.module.css';
import { FaRegMessage } from 'react-icons/fa6';
import { AiOutlineMobile } from 'react-icons/ai';
import { useState } from 'react';
import InputField from './InputField';
import useScreenSize from '@/hooks/useScreenSize';

interface IProps {
     sectionTitle: string;
     subtitle: string;
     linkText: string;
     termsAndConditionsText: string;
     buttonText: string;
     inputFields: { plh: string; type: string; isRequired: boolean }[];
}

export default function MessageFormSection(props: IProps) {
     const { isWindow } = useScreenSize();
     const [focused, setFocused] = useState(-1);
     const {
          sectionTitle,
          subtitle,
          linkText,
          inputFields,
          termsAndConditionsText,
          buttonText,
     } = props;
     const getEl = <span className={styles.linkText}>{linkText}</span>;
     const indexOf = subtitle.indexOf(linkText);
     const txt = subtitle.replace(linkText, '');

     return (
          <div
               className={
                    isWindow ? styles.wrapperWindow : styles.wrapperMobile
               }
          >
               <div className={styles.left}>
                    <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                    <h3 className={styles.subtitle}>
                         {txt.slice(0, indexOf)}
                         {getEl}
                         {txt.slice(indexOf)}
                    </h3>

                    <div className={styles.contactInfoWrapper}>
                         <div className={styles.info}>
                              <div className={styles.icon}>
                                   <FaRegMessage />
                              </div>
                              <p className={styles.infoTxt}>info@accedia.com</p>
                         </div>
                         <div className={styles.info}>
                              <div className={styles.icon}>
                                   <AiOutlineMobile />
                              </div>
                              <p className={styles.infoTxt}>
                                   Bulgaria: +359 (2) 444 20 03 US: +1 (650) 521
                                   51 56
                              </p>
                         </div>
                    </div>
               </div>
               <div className={styles.right}>
                    {inputFields?.map((f, i) => (
                         <InputField
                              key={i}
                              f={f}
                              focused={focused}
                              i={i}
                              setFocused={setFocused}
                         />
                    ))}
                    <label className={styles.checkboxLabel}>
                         <input type="checkbox" />
                         <span>{termsAndConditionsText}</span>
                    </label>
                    <button type="button" className={styles.btnSend}>
                         {buttonText}
                    </button>
               </div>
          </div>
     );
}
