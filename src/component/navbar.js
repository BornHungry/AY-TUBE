import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { MyAuthContext } from "./context/ContextAuth";
import { useContext } from "react";
import { MyContext } from "./context/ContextProvider";
function Navbar({ login }) {
  const { logoutFunc } = useContext(MyAuthContext);
  const { getFireStore } = useContext(MyContext);
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__navbar-left">
          <h2 className="navbar__navbar-left__logo">AY TUBE</h2>
        </div>

        <div className="navbar__navbar-right">
          <NavLink
            className={({ isActive }) => (isActive ? "acitve" : "deactive")}
            to={"/home"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "acitve" : "deactive")}
            to={"/favorites"}
          >
            <button>Favorites</button>
          </NavLink>
          {login ? (
            <NavLink to={"/"}>
              <button onClick={logoutFunc} className="button">
                Sign Out
              </button>
            </NavLink>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "button-active" : "button-deactive"
                }
                to={"/"}
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "button-active" : "button-deactive"
                }
                to={"/signin"}
              >
                Sign in
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
