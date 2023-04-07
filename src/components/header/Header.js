import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showBurgerMenu, setshowBurgerMenu] = useState(false);

  const handleClickBurger = () => {
    setshowBurgerMenu(!showBurgerMenu);
  };

  return (
    <header className="header">
      <div className="containerLogo">
        <div className="logo">
          <Link to="/">
            <img src="/logo/logoElectroDrive.png" alt="logo electroDrive" />
          </Link>
        </div>
        <p>ElectroDrive</p>
      </div>
      <nav className="navBar">
        <div className={`menuNavBar ${showBurgerMenu ? "active" : ""}`}>
          <Link to="">Nos véhicules</Link>
          <Link>Ma réservation</Link>
          <Link to="/profile">Mon compte</Link>
          <Link to="/login">Identifier-vous</Link>
        </div>
        <div
          className={`burger ${showBurgerMenu ? "active" : ""}`}
          onClick={handleClickBurger}
        >
          <span className="afterBurger"></span>
          <span className="middleBurger"></span>
          <span className="beforeBurger"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
