import { Link } from "react-router-dom";
import "./MainPageNav.scss";

function MainPageNav(props) {
  const { listItem1, listItem2, listItem3 } =
    props.mainpageNavState.MainPageNavigation;
  return (
    <header className="main-header">
      <nav className="mainpage-nav">
        <img
          src="img/group.png"
          alt="two styled coffe beans"
          className="logo"
        />
        <ul className="nav-list">
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
