import { Link } from "gatsby";
import React from "react";
import logo from "../../images/logo-white.png";

function NavBar() {
  const [clicked, setClicked] = React.useState("");
  const [active, setActive] = React.useState("");

  const toggleBurger = () => {
    setClicked((prevClicked) => (prevClicked === "" ? "__clicked" : ""));
    setActive((prevActive) => (prevActive === "" ? "nav__menu__active" : ""));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleBurger();
    }
  };

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={`nav`}>
      <Link to="/">
        <img className="nav__logo" src={logo} alt="WNR logo"/>
      </Link>

      <div onClick={toggleBurger} onKeyDown={handleKeyDown} className="hamburger" tabIndex="0">
        <div className={`hamburger__top-bun${clicked}`}></div>
        <div className={`hamburger__meat${clicked}`}></div>
        <div className={`hamburger__bottom-bun${clicked}`}></div>
      </div>

      <ul className={`nav__menu ${active}`}>
        <li>
          <Link to="/" activeStyle={activeStyle}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/aboutus" activeStyle={activeStyle}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={activeStyle}>
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/participation" activeStyle={activeStyle}>
            PARTICIPATION
          </Link>
        </li>
        <li>
          <Link to="/gallery" activeStyle={activeStyle}>
            GALLERY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
