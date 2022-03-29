import MainPageNav from "../../../MainPageNav/MainPageNav";
import CoffeBeansShield from "../MainPageAboutUs/components/CoffeBeansShield";
import "./MainPageFooter.scss";


function MainPageFooter(props) {
    // const { listItem1, listItem2, listItem3 } =
    // props.mainpageFooterState.MainPageNavigation;
    return (
        <footer className="mainpage-footer">
            {/* <MainPageNav /> */}
            <CoffeBeansShield />
        </footer>
    )
}

export default MainPageFooter;