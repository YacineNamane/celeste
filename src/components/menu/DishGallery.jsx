import DishCard from "./DishCard";
import "./DishGallery.css";

const categories = {
  entree: "Entrées",
  plat: "Plats",
  dessert: "Desserts",
};

export default function DishGallery({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return (
      <p className="dish-gallery-empty">Notre carte sera bientôt disponible.</p>
    );
  }

  const groupedDishes = Object.entries(categories)
    .map(([category, label]) => ({
      category,
      label,
      dishes: dishes.filter((dish) => dish.category === category),
    }))
    .filter((group) => group.dishes.length > 0);

  return (
    <div className="dish-gallery">
      {groupedDishes.map((group) => (
        <section className="dish-gallery-section" key={group.category}>
          <div className="dish-gallery-heading">
            <h2>{group.label}</h2>
            <div />
          </div>

          <div className="dish-gallery-grid">
            {group.dishes.map((dish) => (
              <DishCard key={dish._id} dish={dish} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
