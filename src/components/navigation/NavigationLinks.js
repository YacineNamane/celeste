"use client";

import { motion } from "motion/react";
import Link from "next/link";
import styles from "./NavigationLinks.module.css";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NavigationLinks({ items, onNavigate }) {
  return (
    <motion.nav
      className={styles.list}
      variants={listVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 1.15,
        staggerChildren: 0.12,
      }}
      aria-label="Navigation secondaire"
    >
      {items.map((item) => (
        <motion.div key={item.label} variants={itemVariants}>
          <Link href={item.href} className={styles.link} onClick={onNavigate}>
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
