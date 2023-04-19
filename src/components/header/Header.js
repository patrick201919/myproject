import React, { useState } from "react";
import "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/usersRedux/authSlice";

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const islogout = useSelector((state) => state.auth.token);

  console.log("Cqsc", islogout);

  const handleClickBurger = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  const handleLogout = () => {
    dispatch(logout);
    window.location.href = "/";
  };
  const handleLinkClick = () => {
    setShowBurgerMenu(false);
  };

  return (
    <header className="header">
      <div className="containerLogo">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/logo/logoElectroDrive.png" alt="logo electroDrive" />
          </Link>
        </div>
        <p>ElectroDrive</p>
      </div>
      <nav className="navBar">
        <div className={`menuNavBar ${showBurgerMenu ? "active" : ""}`}>
          <Link to="" onClick={handleLinkClick}>
            Nos véhicules
          </Link>
          <Link>Ma réservation</Link>
          <Link to="/profile" onClick={handleLinkClick}>
            Mon compte
          </Link>
          <>
            {islogout === null ? (
              <Link to="/login" onClick={handleLinkClick}>
                Connexion
              </Link>
            ) : (
              <Link onClick={handleLogout}>Déconnexion</Link>
            )}
          </>
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

// const handleLogout = () => {
//   const Redirect = () => {
//     navigate("/");
//   };
//   // localStorage.removeItem("token");
//   dispatch(logout(Redirect()));
// };
