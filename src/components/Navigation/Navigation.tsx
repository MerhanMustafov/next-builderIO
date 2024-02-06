import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/accedia-logo.svg';
import styles from './navigation.module.css';
import { CgMenuLeft } from 'react-icons/cg';

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
                    gap: '30px',
                    alignItems: 'center',
                    padding: '20px',
               }}
          >
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
                    <CgMenuLeft
                         color="white"
                         size={30}
                         style={{ cursor: 'pointer', margin: '10px 0 0 0' }}
                    />
                    {/* {links?.map((link, index) => (
                         <Link
                              key={index}
                              className={styles.link}
                              href={link.data?.url}
                         >
                              {link.data?.label}
                         </Link>
                    ))} */}
                    {/* <Link className={styles.link} href="/">
                         Home
                    </Link>
                    <Link className={styles.link} href="/technologies">
                         Technologies
                    </Link> */}
               </ul>
          </nav>
     );
}
