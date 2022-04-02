import CoffeBeansShield from "../../../MainPage/components/MainPageAboutUs/components/CoffeBeansShield";
import "./CoffeePageAbout.scss";
import {coffeeAboutImg} from "../../../assets/index";

function CoffeePageAbout() {
  return (
    <section className="coffeepage-about-section">
      <div className="about-container">
        <img
          src={coffeeAboutImg}
          alt="black coffeecup on a table with hot coffee"
          className="coffeepage-about-img"
        />
        <div className="coffeepage-about-text">
          <h2 className="coffeepage-about-title">About our beans</h2>
          <CoffeBeansShield />
          <p className="coffeepage-about-paragraph paragraph-padding">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className="coffeepage-about-paragraph">
            Afraid at highly months do things on at. Situation recommend
            objection do intention.
          </p>
          <p className="coffeepage-about-paragraph">so questions.</p>
          <p className="coffeepage-about-paragraph">
            As greatly removed calling pleased improve an.
          </p>
          <p className="coffeepage-about-paragraph">Last ask him cold feel</p>
          <p className="coffeepage-about-paragraph">
            met spot shy want. Children me laughing we
          </p>
          <p className="coffeepage-about-paragraph">
            prospect answered followed. At it went
          </p>
          <p className="coffeepage-about-paragraph">is song that held help face.</p>
        </div>
      </div>
      <div className="coffeepage-underline"></div>
    </section>
  );
}

export default CoffeePageAbout;
