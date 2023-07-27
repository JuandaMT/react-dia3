import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <span>Header</span>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
