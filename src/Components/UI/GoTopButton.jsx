import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GoTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      if (scrollY > screenHeight * 0.2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed cursor-pointer bottom-8 right-8 bg-primary text-white px-4 py-2 rounded shadow-lg z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </motion.button>
      )}
    </>
  );
};

export default GoTopButton;
