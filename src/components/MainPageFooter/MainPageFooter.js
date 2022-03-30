import MainPageNav from "../MainPageNav/MainPageNav";
import CoffeBeansShield from "../MainPage/components/MainPageAboutUs/components/CoffeBeansShield";
import "./MainPageFooter.scss";


function MainPageFooter(props) {
        const footerMenu ={
            color: "black"
        }
    return (
        <footer className="mainpage-footer">
            <MainPageNav mainpageNavState={props.mainPageFooterState}/>
            <CoffeBeansShield />
        </footer>
    )
}

export default MainPageFooter;