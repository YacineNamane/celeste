export const navigationItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    panelColor: "#102c28",
    overlayColor: "rgba(16, 44, 40, 0.48)",
    subItems: [
      { label: "Accueil", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Réservation", href: "/reservation" },
    ],
  },
  {
    id: "menu",
    label: "Menu",
    href: "/menu",
    panelColor: "#34483b",
    overlayColor: "rgba(52, 72, 59, 0.48)",
    subItems: [
      { label: "Découvrir la carte", href: "/menu" },
      { label: "Accueil", href: "/" },
      { label: "Réservation", href: "/reservation" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    panelColor: "#563b32",
    overlayColor: "rgba(86, 59, 50, 0.48)",
    subItems: [
      { label: "Nous contacter", href: "/contact" },
      { label: "Accueil", href: "/" },
    ],
  },
  {
    id: "reservation",
    label: "Reservation",
    href: "/reservation",
    panelColor: "#343b55",
    overlayColor: "rgba(52, 59, 85, 0.48)",
    subItems: [
      { label: "Réserver une table", href: "/reservation" },
      { label: "Nous contacter", href: "/contact" },
    ],
  },
  {
    id: "search",
    label: "Recherche",
    href: "#search",
    panelColor: "#343b55",
    overlayColor: "rgba(52, 59, 85, 0.48)",
    subItems: [],
  },
];
