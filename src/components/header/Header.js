import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../../redux/usersRedux/authSlice";

const Header = () => {
  const [showBurgerMenu, setshowBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.loginUser);
  // const navigate = useNavigate();
  const logout = useSelector((state) => state.auth.logout);

  const handleClickBurger = () => {
    setshowBurgerMenu(!showBurgerMenu);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout);
    window.location.href = "/";
  };

  // const handleLogout = () => {
  //   const Redirect = () => {
  //     navigate("/");
  //   };
  //   // localStorage.removeItem("token");
  //   dispatch(logout(Redirect()));
  // };

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
          <>
            {!isLogin ? (
              <Link to="/login">Connexion</Link>
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
