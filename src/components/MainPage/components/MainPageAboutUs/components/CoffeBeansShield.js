import "./CoffeBeansShield.scss";
import {beansSolidBlack} from "../../../../assets/index";

function CoffeBeansShield() {
  return (
    <div className="slogan-about-lines">
      <div className="slogan-about-item"></div>
      <img
        src={beansSolidBlack}
        alt="two styled solid coffe beans"
        className="about-logo"
      />
      <div className="slogan-about-item"></div>
    </div>
  );
}

export default CoffeBeansShield;
