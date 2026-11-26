import "./DishCard.css";

export default function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <div className="dish-card-image">
        {dish.image?.asset?.url ? (
          <img src={dish.image.asset.url} alt={dish.image.alt || dish.name} />
        ) : (
          <div className="dish-card-placeholder">Photo à venir</div>
        )}
      </div>

      <div className="dish-card-content">
        <div className="dish-card-heading">
          <h3>{dish.name}</h3>

          {dish.price != null && <span>{dish.price.toFixed(2)} €</span>}
        </div>

        {dish.description && (
          <p className="dish-card-description">{dish.description}</p>
        )}
      </div>
    </article>
  );
}
