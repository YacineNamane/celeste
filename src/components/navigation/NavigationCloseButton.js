"use client";

import { motion } from "motion/react";
import styles from "./NavigationCloseButton.module.css";

const curtainTransition = {
  duration: 0.8,
  ease: [0.65, 0, 0.35, 1],
};

export default function NavigationCloseButton({ onClose, position }) {
  return (
    <motion.button
      type="button"
      className={styles.button}
      onClick={onClose}
      aria-label="Fermer le menu"
      initial={{
        left: position.closeLeft,
        opacity: 0,
        scale: 0.9,
        y: "-50%",
      }}
      animate={{
        left: position.closeLeft,
        opacity: 1,
        scale: 1,
        y: "-50%",
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: "-50%",
      }}
      transition={{
        left: curtainTransition,
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      }}
    >
      <span />
      <span />
    </motion.button>
  );
}
