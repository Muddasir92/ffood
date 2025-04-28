import React from "react";
import "../header/header.css";



const Header = () => {
  
  return (
    <div className="head">
            <div className="header">
      <div className="header_content">
        <h2>
          Place Order Your Favourite Food <i className="fa fa-smile"></i>{" "}
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable selection of frozen
          foods crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experience
          with convenient and delicious options, one perfectly frozen meal at a
          time.
        </p>
        <a href="#menu"><button id="viewmenu">View Menu</button></a>
      </div>
    </div>
    </div>
  );
};

export default Header;
