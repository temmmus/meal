import { NavLink } from "react-router-dom";
import "./Alphabet.scss";

const Alphabet: React.FC = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section className="alphabet">
      <h2 className="alphabet__title">Browse meals by alphabet</h2>
      <nav className="alphabet__navigation">
        <ul className="alphabet__navigation-list">
          {alphabet.map((letter) => (
            <NavLink
              key={letter}
              to={`/meals/${letter.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "alphabet__navigation-link active" : "alphabet__navigation-link"
              }
              aria-label={`Meals starting with ${letter}`}
            >
              <li className="alphabet__navigation-item">{letter}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Alphabet;
