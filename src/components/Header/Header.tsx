import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h1 className="header__logo">MEAL</h1>
      </Link>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "header__navigation-link active" : "header__navigation-link"
              }
            >
              Categories
            </NavLink>
          </li>
          <li className="header__navigation-item">
            <NavLink
              to="/meals/a"
              className={({ isActive }) => {
                const isActiveLink = isActive || window.location.pathname.startsWith("/meals/");
                return isActiveLink ? "header__navigation-link active" : "header__navigation-link";
              }}
            >
              Meals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
