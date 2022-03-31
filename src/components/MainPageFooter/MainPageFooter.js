import MainPageNav from "../MainPageNav/MainPageNav";
import CoffeBeansShield from "../MainPage/components/MainPageAboutUs/components/CoffeBeansShield";
import "./MainPageFooter.scss";


function MainPageFooter(props) {

    return (
        <footer className="mainpage-footer">
            <MainPageNav mainpageNavState={props.mainPageFooterState.MainPageNavigation} isBlack />
            <CoffeBeansShield />
        </footer>
    )
}

export default MainPageFooter;