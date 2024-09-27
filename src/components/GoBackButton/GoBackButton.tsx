import { useNavigate } from "react-router-dom";
import "./GoBackButton.scss";

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="go-back-button" onClick={handleGoBack}>
      Go back
    </button>
  );
};

export default GoBackButton;
