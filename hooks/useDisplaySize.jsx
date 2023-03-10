import { useState, useEffect } from "react";

export default function useDisplaySize() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth <= 999);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
}
