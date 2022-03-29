import CoffeBeansShield from "./components/CoffeBeansShield";
import "./MainPageAboutUs.scss";

function MainPageAboutUs(props) {
  const { paragraph1, paragraph2, header } = props.mainpageAboutState.MainPageAbout;
  return (
    <section className="mainpage-about-section">
      <article className="mainpage-about">
        <h2 className="mainpage-about-header">{header}</h2>
        <CoffeBeansShield />
        <p className="mainpage-about-text about-text-padding">{paragraph1}</p>
        <p className="mainpage-about-text">{paragraph2}</p>
      </article>
    </section>
  );
}

export default MainPageAboutUs;
