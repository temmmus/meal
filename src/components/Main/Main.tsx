import React, { ReactNode } from "react";
import "./Main.scss";

interface IMainProps {
  children: ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
