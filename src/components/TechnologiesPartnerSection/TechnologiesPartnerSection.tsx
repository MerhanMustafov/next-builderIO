"use client";
import styles from "./technologiesPartnerSection.module.css";
import React from "react";
import useScreenSize from "@/hooks/useScreenSize";

interface IPartnerSectionProps {
  title: string;
  subtitle: string;
  bg__image: string;
  whyUsReasons: { label: string }[];
}

export default function TechnologiesPartnerSection(props: IPartnerSectionProps) {
  const { title, subtitle, whyUsReasons, bg__image } = props;
  const { isWindow } = useScreenSize();

  return (
    <div
      className={isWindow ? styles.wrapperWindow : styles.wrapperMobile}
      style={{
        backgroundImage: `url(${bg__image})`,
        backgroundSize: "cover",
      }}
    >
      {isWindow && (
        <div className={styles.wrapper__left}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <h3 className={styles.sectionSubtitle}>{subtitle}</h3>
        </div>
      )}
      <div className={styles.wrapper__right}>
        <ul className={styles.listWrapper}>
          {whyUsReasons?.map((reason, index) => (
            <li key={index} className={styles.reasonItem}>
              <span className={styles.box}></span>
              <div>{reason.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
