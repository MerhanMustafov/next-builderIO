import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/accedia-logo.svg';
import styles from './navigation.module.css';
import { builder } from '@builder.io/sdk';

builder.init('9a41098f7b034bc69ea3e94d13345db8');

export default async function Navigation() {
     // const links = await builder.getAll('nav-link', {
     //      cache: false,
     //      sort: {
     //           'data.order': 1,
     //      },
     //      query: {
     //           'data.visible': {
     //                // $eq: true,
     //                // $ne: true,
     //           },
     //      },
     //      // limit: 3,
     // });

     return (
          <nav
               style={{
                    background: 'black',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '50px',
                    alignItems: 'center',
                    padding: '20px',
               }}
          >
               <Image src={Logo} width={100} alt="logo" />
               <ul
                    style={{
                         display: 'flex',
                         flexDirection: 'row',
                         gap: '5px',
                         listStyle: 'none',
                         justifyContent: 'center',
                    }}
               >
                    {/* {links.map((link, index) => (
                         <Link
                              key={index}
                              className={styles.link}
                              href={link.data?.url}
                         >
                              {link.data?.label}
                         </Link>
                    ))} */}
                    <Link className={styles.link} href="/">
                         Home
                    </Link>
                    <Link className={styles.link} href="/technologies">
                         Technologies
                    </Link>
               </ul>
          </nav>
     );
}
