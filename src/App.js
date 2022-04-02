import { Routes, Route } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import {
  MainPageNav,
  MainPage,
  GoodsPage,
  CoffeePage,
  MainPageFooter,
} from "./components/index";

import "./App.scss";

function App(props) {
  return (
      <>
      <header className="main-menu">
      <MainPageNav mainpageNavState={props.appState.MainPageNavigation} />
      </header>
      
      <Routes>
        <Route exact path="/" element={<MainPage mainpageState={props.appState} />} />
        <Route
          path="/ourCoffee"
          element={<CoffeePage coffeepageState={props.appState} />}
        />
        <Route
          path="/yourPleasure"
          element={<GoodsPage goodspageState={props.appState} />}
        />
        <Route
          path={`coffee/:id`}
          element={<CoffeeCard goodspageState={props.appState} />} 
        />
      </Routes>
      <MainPageFooter mainPageFooterState={props.appState} />
      </>
  );
}

export default App;
