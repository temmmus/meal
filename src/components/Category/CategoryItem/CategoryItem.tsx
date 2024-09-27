import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem: React.FC<ICategory> = (category) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <li className="category__card">
      <img className="category__card-image" src={strCategoryThumb} alt={strCategory} />
      <div className="category__card-content">
        <h2 className="category__card-title">{strCategory}</h2>
        <p className="category__card-description">{strCategoryDescription}</p>
        <Link className="category__card-link" to={`/category/${strCategory.toLowerCase()}`}>
          Browse meals by category
        </Link>
      </div>
    </li>
  );
};

export default CategoryItem;
