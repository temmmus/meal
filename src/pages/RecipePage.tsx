import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealById } from "../services/api";
import Loader from "../components/Loader/Loader";
import Recipe from "../components/Recipe/Recipe";

const RecipePage: React.FC = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const meal = await getMealById(id!);
        setMeal(meal);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    getData();
  }, [id]);

  return <>{!meal ? <Loader /> : <Recipe {...meal} />}</>;
};

export default RecipePage;
