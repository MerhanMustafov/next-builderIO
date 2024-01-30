import styles from './messageFormSection.module.css';
import { FaRegMessage } from 'react-icons/fa6';
import { AiOutlineMobile } from 'react-icons/ai';
import { useState } from 'react';
import InputField from './InputField';

interface IProps {
     sectionTitle: string;
     subtitle: string;
     linkText: string;
     termsAndConditionsText: string;
     buttonText: string;
     inputFields: { plh: string; type: string; isRequired: boolean }[];
}

const init: IProps = {
     sectionTitle: 'Contact us',
     subtitle: 'Have a question or want to learn more about our services?',
     linkText: 'Contact us',
     termsAndConditionsText: 'I agree to the terms and conditions',
     buttonText: 'Send',
     inputFields: [
          {
               plh: 'Your name',
               type: 'text',
               isRequired: true,
          },
          {
               plh: 'Your email',
               type: 'email',
               isRequired: true,
          },
          {
               plh: 'Your phone',
               type: 'tel',
               isRequired: false,
          },
          {
               plh: 'Your message',
               type: 'text',
               isRequired: true,
          },
     ],
};

MessageFormSection.defaultProps = init;
export default function MessageFormSection(props: IProps) {
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
          <div className={styles.wrapper}>
               <div className={styles.left}>
                    <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                    <h3>
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
