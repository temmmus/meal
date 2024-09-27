import { Link } from "react-router-dom";
import "./MealItem.scss";

const MealItem: React.FC<IMeal> = (meal) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <li className="meal__card">
      <div className="meal__card-image-container">
        <img className="meal__card-image" src={strMealThumb} alt={strMeal} />
        <Link className="meal__card-link" to={`/recipe/${idMeal}`}>
          Watch recipe
        </Link>
      </div>
      <h2 className="meal__card-title" title={strMeal}>
        {strMeal}
      </h2>
    </li>
  );
};

export default MealItem;
