import { useState, useEffect } from "react";
import { getAllCategories } from "../services/api";
import Loader from "../components/Loader/Loader";
import CategoryList from "../components/Category/CategoryList/CategoryList";

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    getData();
  }, []);

  return <>{!categories.length ? <Loader /> : <CategoryList categories={categories} />}</>;
};

export default CategoriesPage;
