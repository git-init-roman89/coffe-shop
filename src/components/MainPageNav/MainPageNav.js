import { Link } from "react-router-dom";
import "./MainPageNav.scss";

function MainPageNav({mainpageNavState, isBlack=false}) {
  const { listItem1, listItem2, listItem3 } = mainpageNavState;
  return (
    <header className="main-header">
      <nav className="mainpage-nav">
        <img
          src={isBlack ? "img/black-beans-logo.png" : "img/group.png"}
          alt="two styled coffe beans"
          className="logo"
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
    </header>
  );
}

export default MainPageNav;
