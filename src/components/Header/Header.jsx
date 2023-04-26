import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("signed out");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign UP</Link>

        {user && (
          <span className="welcome-text">
            Welcome {user.email}
            <button onClick={handleLogOut}>Sign Out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
