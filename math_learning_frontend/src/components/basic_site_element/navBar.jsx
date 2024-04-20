import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar-main-container">
      <div className="navbar-container">
        <div className="navbar-nav">
          <Link className="nav-item" id="navbar-link" to="/">
            Home
          </Link>

          <NavLink className="nav-item" id="navbar-link" to="/exercises">
            Exercises
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item" id="navbar-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item" id="navbar-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item" id="navbar-link" to="/test-lvl">
                Tests
              </NavLink>
              <NavLink className="nav-item" id="navbar-link" to="/user-profile">
                User Profile
              </NavLink>
              <NavLink className="nav-item" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
