"use client"
// - /notes/src/util/useScreenSize - calculates screen size 
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(() => ({
    width: typeof window !== "undefined" ? document.documentElement.clientWidth || 0 : 0,
  }));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: document.documentElement.clientWidth || 0,
      });
    };

    // Add event listener only if window is defined (not in server-side rendering)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return screenSize;
};

export default useScreenSize;
