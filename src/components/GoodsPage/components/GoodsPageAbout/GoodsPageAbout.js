import CoffeBeansShield from "../../../MainPage/components/MainPageAboutUs/components/CoffeBeansShield";
import "./GoodsPageAbout.scss";
import {goodsAboutImg} from "../../../assets/index"

function GoodsPageAbout() {
  return (
    <section className="goodspage-about-section">
      <div className="goods-about-container">
        <img
          src={goodsAboutImg}
          alt="black coffeecup on a table with hot coffee"
          className="goods-about-img"
        />
        <div className="goods-about-text">
          <h2 className="goods-about-title">About our goods</h2>
          <CoffeBeansShield />
          <p className="goods-about-paragraph paragraph-padding">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className="goods-about-paragraph">
            Afraid at highly months do things on at. Situation recommend
            objection do intention.
          </p>
          <p className="goods-about-paragraph">so questions.</p>
          <p className="goods-about-paragraph">
            As greatly removed calling pleased improve an.
          </p>
          <p className="goods-about-paragraph">Last ask him cold feel</p>
          <p className="goods-about-paragraph">
            met spot shy want. Children me laughing we
          </p>
          <p className="goods-about-paragraph">
            prospect answered followed. At it went
          </p>
          <p className="goods-about-paragraph">is song that held help face.</p>
        </div>
      </div>
      <div className="about-underline"></div>
    </section>
  );
}

export default GoodsPageAbout;
