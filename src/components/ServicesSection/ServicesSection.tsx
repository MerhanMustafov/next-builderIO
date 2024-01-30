import { useEffect, useState } from 'react';
import styles from './serviceSection.module.css';
import useScreenSize from '@/hooks/useScreenSize';

interface IServicesSectionProps {
     sectionTitle: string;
     services: { label: string }[];
}

export default function Services(props: IServicesSectionProps) {
     const { isWindow } = useScreenSize();
     const { services } = props;

     return (
          <ul
               className={`${isWindow && styles.wrapperWindow} ${
                    !isWindow && styles.wrapperTablet
               }`}
          >
               {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                         {service.label}
                    </div>
               ))}
          </ul>
     );
}
