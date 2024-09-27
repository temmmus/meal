export {};

declare global {
  interface ICategory {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }

  interface IMeal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea?: string;
    strInstructions: string;
    strYoutube?: string;
    [key: string]: any;
  }
}
