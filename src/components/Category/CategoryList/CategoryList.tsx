import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.scss";

interface ICategoryListProps {
  categories: ICategory[];
}

const CategoryList: React.FC<ICategoryListProps> = ({ categories }) => {
  return (
    <section className="category">
      <h2 className="category__title">Browse categories</h2>
      <ul className="category__list">
        {categories.map((category: ICategory) => (
          <CategoryItem key={category.idCategory} {...category} />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
