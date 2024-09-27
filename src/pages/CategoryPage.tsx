import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilteredCategory } from "../services/api";
import Loader from "../components/Loader/Loader";
import MealList from "../components/Meal/MealList/MealList";

const CategoryPage: React.FC = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const meals = await getFilteredCategory(name!);
        setMeals(meals);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    getData();
  }, [name]);

  return <>{!meals.length ? <Loader /> : <MealList meals={meals} />}</>;
};

export default CategoryPage;
