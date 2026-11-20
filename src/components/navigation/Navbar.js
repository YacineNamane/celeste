"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";

import { navigationItems } from "@/data/navigation";
import NavigationCurtain from "./NavigationCurtain";
import NavigationOverlay from "./NavigationOverlay";
import NavigationCloseButton from "./NavigationCloseButton";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activePanel, setActivePanel] = useState(null);
  const [panelPosition, setPanelPosition] = useState(null);

  const selectedItem = navigationItems.find((item) => item.id === activePanel);

  function handleNavigation(item, event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 640;

    const panelLeft = isMobile ? 0 : rect.left;
    const panelWidth = viewportWidth - panelLeft;

    const closeSize = 46;
    const closeGap = 16;

    setPanelPosition({
      left: panelLeft,
      width: panelWidth,
      closeLeft: panelLeft - closeSize - closeGap,
      mobile: isMobile,
    });

    setActivePanel(item.id);
  }

  function closeNavigation() {
    setActivePanel(null);
  }

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          CÉLESTE
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.navLink}
              aria-expanded={activePanel === item.id}
              onClick={(event) => handleNavigation(item, event)}
            >
              {item.id === "search" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="10.8"
                    cy="10.8"
                    r="6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="m15.6 15.6 4.1 4.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                item.label
              )}
            </button>
          ))}
        </nav>
      </header>

      <AnimatePresence>
        {selectedItem && panelPosition && (
          <>
            <NavigationOverlay
              key="navigation-overlay"
              color={selectedItem.overlayColor}
              onClose={closeNavigation}
            />

            <NavigationCurtain
              key="navigation-curtain"
              item={selectedItem}
              position={panelPosition}
            />

            {!panelPosition.mobile && (
              <NavigationCloseButton
                key="navigation-close"
                position={panelPosition}
                onClose={closeNavigation}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
