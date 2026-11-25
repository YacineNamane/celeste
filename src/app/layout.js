import Navbar from "@/components/navigation/Navbar";
import { beausite } from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "CÉLESTE | Restaurant",
    template: "%s | CÉLESTE",
  },
  description:
    "Bienvenue chez CÉLESTE, une adresse où élégance, gastronomie et art de recevoir se rencontrent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={beausite.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
