'use client';
import { useEffect, useState } from 'react';

export default function useScreenSize() {
     const [isWindow, setIsWindow] = useState(false);
     const handleResize = () => {
          const width = window.innerWidth;
          if (width < 1000) {
               setIsWindow(false);
          } else {
               setIsWindow(true);
          }
     };
     useEffect(() => {
          setIsWindow(true);
          window.addEventListener('resize', handleResize);
          handleResize();
     }, []);

     return { isWindow };
}
