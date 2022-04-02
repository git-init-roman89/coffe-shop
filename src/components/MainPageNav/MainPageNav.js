import { Link } from "react-router-dom";
import "./MainPageNav.scss";
import {blackBeansLogo, beansLogo} from "../assets/index";

function MainPageNav({mainpageNavState, isBlack=false}) {
  const { listItem1, listItem2, listItem3 } = mainpageNavState;
  return (
    <div className="main-navigation">
      <nav className={`mainpage-nav ${isBlack ? "mainpage-nav-footer" : ""}`}>
        <img
          src={isBlack ? blackBeansLogo : beansLogo}
          alt="two styled coffe beans"
          className={`logo ${isBlack ? "logo-footer" : ""}`}
        />
        <ul className={`nav-list ${isBlack ? "nav-list-black" : ""}`}>
          <li className="nav-list-item">
            <Link to="/">{listItem1}</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/ourCoffee">{listItem2}</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/yourPleasure">{listItem3}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPageNav;
