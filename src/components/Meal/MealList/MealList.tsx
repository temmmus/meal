import { useParams } from "react-router-dom";
import MealItem from "../MealItem/MealItem";
import "./MealList.scss";

interface IMealListProps {
  meals: IMeal[];
}

const MealList: React.FC<IMealListProps> = ({ meals }) => {
  const { name } = useParams();

  return (
    <section className="meal">
      {name ? (
        <h2 className="meal__title">
          Meals in category: {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      ) : null}

      <ul className="meal__list">
        {meals.map((meal: IMeal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </ul>
    </section>
  );
};

export default MealList;
