'use client';
import styles from './footer.module.css';
import Image from 'next/image';
import Logo from '../../../public/accedia-logo.svg';
import useScreenSize from '@/hooks/useScreenSize';

export default function Footer() {
     const { isWindow } = useScreenSize();

     return (
          <footer className={styles.footer}>
               <div
                    className={`${
                         isWindow ? styles.footer_t : styles.footer_t_Mobile
                    }`}
               >
                    {isWindow && <Image src={Logo} width={100} alt="logo" />}
                    <div>
                         <div className={styles.title}>Service</div>
                         <div className={styles.options}>
                              <div>Technology Consulting </div>
                              <div>Software Development</div>
                         </div>
                    </div>
                    <div>
                         <div className={styles.title}>Industries</div>
                         <div className={styles.options}>
                              <div>Financial IT Services </div>
                              <div>Manufacturing </div>
                              <div>Technology </div>
                              <div>Energy </div>
                         </div>
                    </div>
                    <div>
                         <div className={styles.title}>Cmpany</div>
                         <div className={styles.options}>
                              <div>About us </div>
                              <div>Mission </div>
                              <div>Compliance </div>
                              <div>News</div>
                              <div>Awards</div>
                              <div>IDC</div>
                              <div>Business Partner Program</div>
                         </div>
                    </div>
                    <div>
                         <div className={styles.title}>Careers</div>
                         <div className={styles.options}>
                              <div>Job Openings </div>
                              <div>Referral Program</div>
                              <div>GROW@Accedia</div>
                         </div>
                    </div>
                    <div>
                         <div className={styles.title}>Blog</div>
                         <div className={styles.options}></div>
                    </div>
                    <div>
                         <div className={styles.title}>Contacts</div>
                         <div className={styles.options}></div>
                    </div>
               </div>
               <div className={styles.footer_b}>
                    <span>
                         2023 Accedia. Some rights reserved | Privacy Notice
                    </span>
                    <div className={styles.middle}>
                         <span>info@accedia.com</span>
                         <span>+359 (2) 444 2003</span>
                         <span>+1 (617) 356 1377</span>
                    </div>
                    <div className={styles.rightEnd}>
                         <span>Facebook</span>
                         <span>LinkedIn</span>
                         <span>Twitter</span>
                         <span>Instagram</span>
                    </div>
               </div>
          </footer>
     );
}
