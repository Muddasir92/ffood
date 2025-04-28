import React, { useState } from "react";
import "../navbar/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({setshowlogin}) => {
  const [menu, setMenu] = useState("home");
  function handleMenu (val) {
    setMenu(val);
    // console.log(val);
  }
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <h2>Chicken Express</h2>
        </div>
        <div className="navmenu">
          <ul>
            <Link to='/'
              onClick={() => handleMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <a  href="#mobileApp" onClick={() => handleMenu("mobile_app")}  className={menu==="mobile_app"?"active":""}>Mobile App</a>
            <a href="#menu"
            onClick={() => handleMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
            <a  href="#contact-us"
            onClick={() => handleMenu("contact_us")}
              className={menu === "contact_us" ? "active" : ""}
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faSearch} className="custom_icon" />
          <FontAwesomeIcon icon={faBasketShopping} className="custom_icon" />
          <button className="singin_btn"  onClick={()=>setshowlogin(true)} >sign in</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
