"use client";

import { motion } from "motion/react";
import styles from "./NavigationOverlay.module.css";

export default function NavigationOverlay({ color, onClose }) {
  return (
    <motion.button
      type="button"
      className={styles.overlay}
      style={{ backgroundColor: color }}
      initial={{
        opacity: 0,
        backdropFilter: "blur(0px)",
        backgroundColor: color,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(5px)",
        backgroundColor: color,
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
        backgroundColor: {
          duration: 1.3,
          ease: [0.65, 0, 0.35, 1],
        },
      }}
      onClick={onClose}
      aria-label="Fermer le menu"
      tabIndex={-1}
    />
  );
}
