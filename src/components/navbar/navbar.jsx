import  { useState } from "react";
import '../navbar/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ setshowlogin }) => {
  const [menu, setMenu] = useState("home");

  function handleMenu(val) {
    setMenu(val);
  }

  return (
    <div className="navbarCon">
      <nav>
        <div className="logo">
          <Link to="/">
            <h2  onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} >Food Point</h2>
          </Link>
        </div>
        <div className="navmenu">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  handleMenu("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={menu === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#mobileApp"
                onClick={() => handleMenu("mobile_app")}
                className={menu === "mobile_app" ? "active" : ""}
              >
                Mobile App
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#menu"
                onClick={() => handleMenu("menu")}
                className={menu === "menu" ? "active" : ""}
              >
                Menu
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact-us"
                onClick={() => handleMenu("contact_us")}
                className={menu === "contact_us" ? "active" : ""}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faSearch} className="custom_icon" />
          <Link to="/cart">
            <FontAwesomeIcon icon={faBasketShopping} className="custom_icon" />
          </Link>
          <button className="singin_btn" onClick={() => setshowlogin(true)}>
            sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
