import React from "react";
import Menu from "./../../Images/icon-menu.svg";
import Logo from "../../Images/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="group-left">
        <img src={Menu} alt="Menu" />
        <img src="" alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
