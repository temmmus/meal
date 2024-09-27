import React from "react";
import "./Loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p className="loader__text">Loading...</p>
    </div>
  );
};

export default Loader;
