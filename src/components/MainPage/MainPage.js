import {
  MainPageAboutUs,
  MainPagePromo,
  MainPageOurBest,
} from "./components/index";
import "./MainPage.scss";

function MainPage(props) {
  return (
    <main className="mainpage-container">
      <MainPagePromo mainpagePromoState={props.mainpageState} />
      <MainPageAboutUs mainpageAboutState={props.mainpageState} />
      <MainPageOurBest mainpageOurBest={props.mainpageState} />
    </main>
  );
}

export default MainPage;
