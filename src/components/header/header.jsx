// import AboutMe from "../about_page/about_me";
import "./../../css/styles.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a
                  href="../about_page/about_me.jsx"
                  className="navigation__link"
                >
                  <span>01</span>About me
                </a>
              </li>
              {/* <li className="navigation__item">
                  <a href={<Services />} className="navigation__link">
                    <span>02</span>Services
                  </a>
                </li> */}
              <li className="navigation__item">
                <a href="./" className="navigation__link">
                  <span>03</span>Resume
                </a>
              </li>
              <li className="navigation__item">
                <a href="./" className="navigation__link">
                  <span>04</span>Reviews
                </a>
              </li>
              <li className="navigation__item">
                <a href="./" className="navigation__link">
                  <span>04</span>Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logo-box">
          <h1 className="logo">
            <a href="./">DevFolio</a>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
