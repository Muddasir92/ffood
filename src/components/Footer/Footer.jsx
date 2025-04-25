import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footerContent">
        <div className="leftFcontent">
          <h1>Chicken Express</h1>
          <p>
            At Chicken Express, enjoy premium frozen foods like chicken nuggets,
            kebabs, and burger patties. Quality and convenience meet for quick,
            delicious meals. Visit us today for tasty delights!
          </p>
        </div>
        <div className="centerFcontent">
          <h2>Social Links</h2>
          <ul>
            <li>
              <i className="fab fa-facebook"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>

            <li>
              <i className="fab fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div className="rightFcontent" id="contact-us">
          <h2>Get in Touch!</h2>
          <ul>
            <li>+92 3228733898</li>
            <li>chickenexpress@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p className="copyright-text">{`© ${year} Chicken Express. All copyrights are reserved`}</p>
      </div>
    </div>
  );
};

export default Footer;
