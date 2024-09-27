import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMealByAlphabet } from "../services/api";
import Loader from "../components/Loader/Loader";
import MealList from "../components/Meal/MealList/MealList";
import Alphabet from "../components/Alphabet/Alphabet";

const MealsPage: React.FC = () => {
  const { letter } = useParams();
  const [meals, setMeals] = useState<IMeal[] | null>([]);

  useEffect(() => {
    const getData = async () => {
      if (!letter) return;
      setMeals([]);
      try {
        const meals = await getMealByAlphabet(letter!);
        setMeals(meals);
      } catch (error) {
        console.error(`Ошибка при запросе для буквы ${letter}:`, error);
      }
    };
    getData();
  }, [letter]);

  return (
    <>
      <Alphabet />
      {meals === null ? (
        <p>No meals found by letter {letter?.toUpperCase()}</p>
      ) : !meals.length ? (
        <Loader />
      ) : (
        <MealList meals={meals} />
      )}
    </>
  );
};

export default MealsPage;
