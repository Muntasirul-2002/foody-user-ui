import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate()
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logOut = () =>{
    localStorage.removeItem("token");
    setToken("")
    toast.success("Logout successful");
    setTimeout(() => navigate('/'), 100); // Delay navigation to ensure toast is shown


  }
  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <Link to={"/"}>
        <h1 className="foody-logo">
          Foody <span className="logo-dot">.</span>
        </h1>
      </Link>
      <ul className="navbar-menu">
        <Link 
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/my-orders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={()=>logOut()}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
