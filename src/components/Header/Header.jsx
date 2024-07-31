import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Hey Foody!!</h2>
        <p>
          Order your favorite food here, choose from a diverse menu featuring.
        </p>

        <Link to={"/menu"}>
          <button>View Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
