"use client";

import { motion } from "motion/react";
import styles from "./NavigationCurtain.module.css";
import NavigationLinks from "./NavigationLinks";
import NavigationSearch from "./NavigationSearch";

const curtainTransition = {
  duration: 0.8,
  ease: [0.65, 0, 0.35, 1],
};

export default function NavigationCurtain({ item, position, onNavigate }) {
  return (
    <motion.aside
      className={styles.curtain}
      style={{ width: "100vw" }}
      initial={{
        left: "100vw",
        backgroundColor: item.panelColor,
      }}
      animate={{
        left: position.left,
        backgroundColor: item.panelColor,
      }}
      exit={{
        left: "100vw",
      }}
      transition={{
        left: curtainTransition,
        backgroundColor: curtainTransition,
      }}
      aria-label={`Menu ${item.label}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.category}>{item.label}</span>
        </div>

        <div className={styles.content}>
          {item.id === "search" ? (
            <NavigationSearch onNavigate={onNavigate} />
          ) : (
            <NavigationLinks
              key={item.id}
              items={item.subItems}
              onNavigate={onNavigate}
            />
          )}
        </div>
      </div>
    </motion.aside>
  );
}
