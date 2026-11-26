import { sanityClient } from "@/sanity/client";
import { DISHES_QUERY } from "@/sanity/queries/dishes";
import DishGallery from "@/components/menu/DishGallery";
import "./menu.css";

export const metadata = {
  title: "Notre carte",
  description: "Découvrez la carte de CÉLESTE et nos créations culinaires.",
};

export const revalidate = 60;

export default async function MenuPage() {
  const dishes = await sanityClient.fetch(DISHES_QUERY);

  return (
    <main className="menu-page">
      <header className="menu-header">
        <p className="menu-eyebrow">L'univers culinaire CÉLESTE</p>
        <h1>Notre carte</h1>
        <p className="menu-intro">
          Une cuisine inspirée par les saisons, le goût des bons produits et le
          plaisir de recevoir.
        </p>
        <div className="menu-divider" />
      </header>

      <div className="menu-content">
        <DishGallery dishes={dishes} />
      </div>
    </main>
  );
}
