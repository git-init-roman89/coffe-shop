import "./MainPagePromo.scss";

function MainPageLogo(props) {
  const { text1, text2, text3, text4 } =
  props.mainpagePromoState.MainPagePromo;
  return (
    <section className="mainpage-promo-section">
      <div className="mainpage-slogan">
            <h1 className="mainpage-slogan-text">{text1}</h1>
            <div className="slogan-logo-lines">
                <div className="slogan-logo-item"></div>
                <img src="img/beans-solid.png" alt="two styled solid coffe beans" className="slogan-logo" />
                <div className="slogan-logo-item"></div>
            </div>
            <h2 className="mainpage-slogan-subtext sub-text-padding">{text2}</h2>
            <h2 className="mainpage-slogan-subtext">{text3}</h2>
            <button className="mainpage-slogan-button">{text4}</button>
      </div>
    </section>
  );
}

export default MainPageLogo;
