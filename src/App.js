import { Routes, Route } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
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
      <>
      <div className="main-menu">
      <MainPageNav mainpageNavState={props.appState.MainPageNavigation} />
      </div>
      
      <Routes>
        <Route exact path="/" element={<MainPage mainpageState={props.appState} />} />
        <Route
          path="/ourCoffee"
          element={<CoffeePage coffeepageState={props.appState} />}
        />
        <Route path="/coffeeItem" element={<CoffeeItemPage />} />
        <Route
          path="/yourPleasure"
          element={<GoodsPage goodspageState={props.appState} />}
        />
        <Route
          path={`coffee/:id`}
          element={<CoffeeCard goodspageState={props.appState} />} 
        />
      </Routes>
      {/* <Route path={`${match.path}/:topicId`}></Route> */}
      <MainPageFooter mainPageFooterState={props.appState} />
      </>
  );
}

export default App;
