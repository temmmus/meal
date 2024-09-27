export const THEMEALDB_API_URL = "https://themealdb.com/api/json/v1/1/";

const getAllCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(THEMEALDB_API_URL + "categories.php");
  const { categories } = await response.json();

  const cleanedCategories = categories.map((category: ICategory) => {
    return {
      ...category,
      strCategoryDescription: category.strCategoryDescription.replace(/\[\d+\]/g, ""),
    };
  });

  return cleanedCategories;
};

const getFilteredCategory = async (name: string): Promise<IMeal[]> => {
  const response = await fetch(THEMEALDB_API_URL + "filter.php?c=" + name);
  const { meals } = await response.json();

  return meals;
};

const getMealById = async (id: string): Promise<IMeal> => {
  const response = await fetch(THEMEALDB_API_URL + "lookup.php?i=" + id);
  const { meals } = await response.json();

  return meals[0];
};

const getMealByAlphabet = async (letter: string): Promise<IMeal[]> => {
  const response = await fetch(THEMEALDB_API_URL + "search.php?f=" + letter);
  const { meals } = await response.json();

  return meals;
};

const getRandomMeal = async (): Promise<IMeal> => {
  const response = await fetch(THEMEALDB_API_URL + "random.php?");
  const { meals } = await response.json();

  return meals[0];
};

export { getAllCategories, getFilteredCategory, getMealById, getMealByAlphabet, getRandomMeal };
