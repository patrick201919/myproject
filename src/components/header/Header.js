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
          <img src="/logo/logoElectroDrive.png" alt="logo electroDrive" />
        </div>
        <p>ElectroDrive</p>
      </div>
      <nav className="navBar">
        <div className={`menuNavBar ${showBurgerMenu ? "active" : ""}`}>
          <Link to="/">Nos véhicules</Link>
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
// const [showMenu, setShowMenu] = useState(false);

// const toggleMenu = () => {
//   setShowMenu(!showMenu);
// };
// const test = "test";
// const test1 = "test1";

// return (
//   <nav className="navbar">
//     <div className="navbar-container">
//       <Link to="/" className="navbar-logo">
//         MonSite
//       </Link>
//       <div className="menu-icon" onClick={toggleMenu}>
//         {showMenu ? test : test1}
//       </div>
//       <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
//         <li className="nav-item">
//           <Link to="/" className="nav-links" onClick={toggleMenu}>
//             Accueil
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/services" className="nav-links" onClick={toggleMenu}>
//             Services
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/about" className="nav-links" onClick={toggleMenu}>
//             À propos
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/contact" className="nav-links" onClick={toggleMenu}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
