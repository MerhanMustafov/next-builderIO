import styles from "../styles.module.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavContext } from "../context";
import NavNestedTwo from "./NavNestedTwo";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";

interface IRef {
  ref: {
    "@type": "@builder.io/core:Reference";
    model: "nav-level-1";
    id: "f5f9fd7d2db145519f94d35468830d0d";
  };
}

export default function NavNestedOne() {
  const { closeNavigationDrawer, navData, active, handleActiveNavClick, handleRefsExtraction } = useNavContext();
  const nestedLinks = navData[1]?.all?.filter((link) => navData[1].refIds?.includes(link.id as string));

  const handleMouseOver = (label: string, nested: IRef[] | null, nextLayer: 1 | 2 | 3) => {
    handleActiveNavClick(label);
    handleRefsExtraction(nested, nextLayer);
  };

  if (!nestedLinks || nestedLinks.length < 1) {
    return null;
  }

  return (
    <div className={styles["dropdown"]}>
      <div className={styles["header"]}>
        <MdOutlineClose onClick={closeNavigationDrawer} className={styles["closeIcon"]} />
      </div>
      <div className={styles["body"]}>
        {nestedLinks?.map((link) => {
          const url = link.data?.url;
          const label = link.data?.label;
          const nested = link.data?.nested;

          const componentKey = link.id;

          const isActiveClass = active === label ? styles["active"] : "";

          if (url) {
            return (
              <div key={componentKey} className={styles["dropdownLayout"]}>
                <Link
                  key={componentKey}
                  onClick={() => handleMouseOver(label, null, 1)}
                  className={styles["navLink"]}
                  href={url}
                >
                  {label}
                </Link>
              </div>
            );
          }

          return (
            <div key={componentKey} className={styles["dropdownLayout"]}>
              <div
                key={componentKey}
                onClick={() => handleMouseOver(label, nested, 2)}
                className={`${styles["navLink"]} ${isActiveClass}`}
              >
                <span>{link.data?.label}</span>
                {active === label && <FaArrowRightLong className={styles["arrow"]} />}
                {active === label && <NavNestedTwo />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
