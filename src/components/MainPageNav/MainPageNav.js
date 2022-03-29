import "./MainPageNav.scss";

function MainPageNav(props) {
    const { listItem1, listItem2, listItem3 } =
    props.mainpageNavState.MainPageNavigation;
  return (
    <header className="main-header">
    <nav className="mainpage-nav">
      <img src="img/group.png" alt="two styled coffe beans" className="logo" />
      <ul className="nav-list">
        <li className="nav-list-item">{listItem1}</li>
        <li className="nav-list-item">{listItem2}</li>
        <li className="nav-list-item">{listItem3}</li>
      </ul>
    </nav>
    </header>
  );
}

export default MainPageNav;
