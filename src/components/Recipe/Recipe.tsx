import { Link } from "react-router-dom";
import GoBackButton from "../GoBackButton/GoBackButton";
import "./Recipe.scss";

const Recipe: React.FC<IMeal> = (recipe) => {
  const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube } = recipe;

  return (
    <div className="recipe">
      <div>
        <GoBackButton />
      </div>

      <div className="recipe__header">
        <img className="recipe__image" src={strMealThumb} alt={strMeal} />
        <div className="recipe__info">
          <h1 className="recipe__title">{strMeal}</h1>
          <h2 className="recipe__category">
            Category:{" "}
            <Link className="recipe__category-link" to={`/category/${strCategory.toLowerCase()}`}>
              {strCategory}
            </Link>
          </h2>
          <h3 className="recipe__area">Area: {strArea}</h3>
        </div>
      </div>

      <table className="recipe__table">
        <thead>
          <tr>
            <th className="recipe__table-header">Ingredient</th>
            <th className="recipe__table-header">Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <tr key={key} className="recipe__table-row">
                  <td className="recipe__table-data">{recipe[key]}</td>
                  <td className="recipe__table-data">{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <p className="recipe__instructions">{strInstructions}</p>

      <iframe
        className="recipe__video"
        src={`https://www.youtube.com/embed/${strYoutube?.slice(-11)}`}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
};

export default Recipe;
