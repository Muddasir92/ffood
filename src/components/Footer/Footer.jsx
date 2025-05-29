import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footerContent">
        <div className="leftFcontent">
          <h1>Food Corner</h1>
          <p>
            At Food Corner, enjoy premium frozen foods like chicken nuggets,
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
            <li>foodcorner@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p className="copyright-text">{`© ${year} Food Corner. All copyrights are reserved`}</p>
      </div>
    </div>
  );
};

export default Footer;
