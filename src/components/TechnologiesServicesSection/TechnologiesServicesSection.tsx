"use client";
import styles from "./serviceSection.module.css";
import useScreenSize from "@/hooks/useScreenSize";

interface IServicesSectionProps {
  sectionTitle: string;
  services: { label: string }[];
}

export default function TechnologiesServicesSection(props: IServicesSectionProps) {
  const { isWindow } = useScreenSize();
  const { sectionTitle, services } = props;

  return (
    <div className={styles.wrapper}>
      <h2 className={isWindow ? styles.sectionTitleWindow : styles.sectionTitleMobile}>{sectionTitle}</h2>
      <ul className={`${isWindow && styles.listWrapperWindow} ${!isWindow && styles.listWrapperMobile}`}>
        {services?.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            {service.label}
          </div>
        ))}
      </ul>
    </div>
  );
}
