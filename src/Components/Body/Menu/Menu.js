import React, {useState} from "react";
import Close from "../../../Images/icon-close.svg";
import "../Menu/Menu.css";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(true)

    const closeBtn = () => {
         
    }

  return (
    <div className="menu-container">
      <img src={Close} alt="Close" onClick={closeBtn} />
      <div>
        <p>Collections</p>
        <p>Men</p>
        <p>Woman</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Menu;
