/* eslint-disable react-hooks/exhaustive-deps */
import { BuilderContent } from "@builder.io/sdk";
import styles from "../styles.module.css";
import LinkWithUrl from "../LinkWithUrl";
import LinkWithDropDown from "../LinkWithDropDown";
import { useEffect } from "react";
import { useNavContext } from "../context";
import NavNestedOne from "./NavNestedOne";
import Link from "next/link";

interface IRef {
  ref: {
    "@type": "@builder.io/core:Reference";
    model: "nav-level-1";
    id: "f5f9fd7d2db145519f94d35468830d0d";
  };
}

interface INavData {
  1: {
    all: BuilderContent[] | null;
    refIds: string[] | null;
  };
  2: {
    all: BuilderContent[] | null;
    refIds: string[] | null;
  };
  3: {
    all: BuilderContent[] | null;
    refIds: string[] | null;
  };
}

interface IProps {
  nlt: BuilderContent[]; // nlt === navLevelTop (for GQL) === nav-level-top (for Builder.io.sdk)
  nl1: BuilderContent[];
  nl2: BuilderContent[];
}
export default function NavTopLevel(props: IProps) {
  const { nlt, nl1, nl2 } = props;
  const { setNavData, handleActiveNavClick, handleRefsExtraction, active } = useNavContext();

  const navData: INavData = {
    1: {
      all: nl1,
      refIds: null,
    },
    2: {
      all: nl2,
      refIds: null,
    },
    3: {
      all: null,
      refIds: null,
    },
  };

  useEffect(() => {
    setNavData(navData);
  }, []);

  const handleMouseOver = (label: string, nested: IRef[] | null, nextLayer: 1 | 2 | 3) => {
    handleActiveNavClick(label);
    handleRefsExtraction(nested, nextLayer);
  };

  return (
    <ul className={styles["topLevelNavWrapper"]}>
      {nlt.map((link) => {
        const url = link.data?.url;
        const label = link.data?.label;
        const nested = link.data?.nested;
        const componentKey = link.id;

        const isActiveClass = active === label ? styles["active"] : "";

        if (url) {
          return (
            <Link
              key={componentKey}
              // onMouseOver={() => handleMouseOver(label, null, 1)}
              className={styles["navLink"]}
              href={url}
            >
              {label}
            </Link>
          );
        } else if (nested) {
          return (
            <>
              <div key={componentKey} onMouseOver={() => handleMouseOver(label, nested, 1)}>
                <span className={`${styles["navLink"]} ${isActiveClass}`}>{label}</span>
              </div>
              <NavNestedOne />
            </>
          );
        }
      })}
    </ul>
  );
}
