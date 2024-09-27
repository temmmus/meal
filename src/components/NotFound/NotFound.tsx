import GoBackButton from "../GoBackButton/GoBackButton";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 – Not Found</h1>
      <p className="not-found__message">Sorry, page not found.</p>
      <GoBackButton />
    </div>
  );
};

export default NotFound;
