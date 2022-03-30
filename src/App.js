import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import {
  MainPageNav,
  MainPage,
  GoodsPage,
  CoffeePage,
  CoffeeItemPage,
  MainPageFooter,
} from "./components/index";

import "./App.scss";

function App(props) {
  return (
    <Fragment>
      <MainPageNav mainpageNavState={props.appState} />
      <Routes>
        <Route path="/" element={<MainPage mainpageState={props.appState} />} />
        <Route
          path="/ourCoffee"
          element={<CoffeePage coffeepageState={props.appState} />}
        />
        <Route path="/coffeeItem" element={<CoffeeItemPage />} />
        <Route
          path="/yourPleasure"
          element={<GoodsPage goodspageState={props.appState} />}
        />
      </Routes>
      <MainPageFooter mainPageFooterState={props.appState} />
    </Fragment>
  );
}

export default App;
