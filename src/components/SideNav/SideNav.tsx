'use client';
import useScreenSize from '@/hooks/useScreenSize';
import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './sidenav.module.css';

export default function SideNav() {
     const { isWindow } = useScreenSize();
     return (
          <>
               {isWindow && (
                    <div className={styles.sidebar}>
                         <RxHamburgerMenu color="white" size={40} />
                         <div className={styles.followTxt}>FOLLOW US</div>
                    </div>
               )}
          </>
     );
}
