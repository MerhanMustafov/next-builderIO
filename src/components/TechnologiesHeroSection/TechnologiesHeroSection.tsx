/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./technologiesHeroSection.module.css";
import useScreenSize from "@/hooks/useScreenSize";

interface TechnologiesHeroSectionProps {
  title: string;
  subtitle: string;
  image: string | null;
}

export default function TechnologiesHeroSection(props: TechnologiesHeroSectionProps) {
  const { image, subtitle, title } = props;
  const { isWindow } = useScreenSize();

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`${isWindow ? styles.contentWindow : styles.contentMobile}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
