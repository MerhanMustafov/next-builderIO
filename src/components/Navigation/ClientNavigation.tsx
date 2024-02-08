/* eslint-disable @next/next/no-img-element */
"use client";
import { BuilderContent } from "@builder.io/sdk";
import Links from "./Links";
import Link from "next/link";
import styles from "./navigation.module.css";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

interface IProps {
  l1: BuilderContent[]; // l1 === navLinks1(for GQL) === nav-links-1(for Builder.io.sdk)
  l2: BuilderContent[];
  l3: BuilderContent[];
  l4: BuilderContent[];
  logo: string;
}

export default function ClientNavigation(props: IProps) {
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const { l1, l2, l3, l4, logo } = props;

  const openNavigationDrawer = () => {
    setShowNavDrawer(true);
  };

  const closeNavigationDrawer = () => {
    setShowNavDrawer(false);
  };

  return (
    <nav className={styles.navWrapper}>
      <img src={logo} width={150} height={50} alt="logo" />

      {showNavDrawer && (
        <>
          <div className={styles.clickAwayBackground} onClick={closeNavigationDrawer}></div>
          <div className={styles.navDrawer}>
            <img src={logo} width={150} height={50} alt="logo" />
            <Links l1={l1} l2={l2} l3={l3} l4={l4} closeNavigationDrawer={closeNavigationDrawer} />
          </div>
        </>
      )}
      <>
        <RiMenu2Fill fill="white" size={30} onClick={openNavigationDrawer} cursor="pointer" />
      </>
      <ul className={styles.navUi}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/technologies">
          Tech
        </Link>
      </ul>
    </nav>
  );
}
