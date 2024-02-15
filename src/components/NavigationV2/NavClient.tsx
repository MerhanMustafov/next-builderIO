/* eslint-disable @next/next/no-img-element */
"use client";

import { BuilderContent } from "@builder.io/sdk";
import styles from "./styles.module.css";
import { NavContextProvider } from "./context";
import NavTopLevel from "./NavLayers/NavTopLevel";

interface IProps {
  nlt: BuilderContent[]; // nlt === navLevelTop (for GQL) === nav-level-top (for Builder.io.sdk)
  nl1: BuilderContent[];
  nl2: BuilderContent[];
}

export default function NavClient(props: IProps) {
  const { nlt, nl1, nl2 } = props;

  return (
    <NavContextProvider>
      <nav className={styles["navWrapper"]}>
        <img
          src={
            "https://cdn.builder.io/api/v1/image/assets%2F9a41098f7b034bc69ea3e94d13345db8%2Facc2d3700e704164b3d78478c746fa40"
          }
          width={150}
          height={50}
          alt="logo"
        />
        <NavTopLevel nlt={nlt} nl1={nl1} nl2={nl2} />
      </nav>
    </NavContextProvider>
  );
}
