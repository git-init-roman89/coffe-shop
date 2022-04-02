import { useParams } from "react-router-dom";
import { CoffeePagePromo } from "../CoffePage/components";
import CoffeBeansShield from "../MainPage/components/MainPageAboutUs/components/CoffeBeansShield";
import { coffeeItemPageLogo } from "../assets/index";

import "./CoffeeCard.scss";
function CoffeeCard(props) {
  let { id } = useParams();
  const products = props.goodspageState.Products;
  const coffeeItem = products.find((item) => {
    return +id === item.id;
  });

  return (
    <>
      <CoffeePagePromo />
      <section className="coffepage-main">
        {/* image flex container start*/}

        <div className="coffee-img-container">
          <img
            src={coffeeItemPageLogo}
            alt="coffee package on the table"
            className="coffeepage-main-img"
          />
        </div>

        {/* image flex container end*/}

        {/* card+description flex container start*/}

        <div className="coffecard-container">
          {/* About title*/}
          <div className="coffee-card-text">
            <h2 className="coffee-card-title">About it</h2>
            <CoffeBeansShield />
          </div>
          {/* About title*/}

          {/* card+description flex*/}
          <div className="coffee-description-container">
            <div className="coffee-item">
              <img
                src={coffeeItem.photo}
                alt="two packages of coffee"
                className="coffee-img"
              />
              <span className="coffee-title">{coffeeItem.title}</span>
              <span className="coffee-subtitle">{coffeeItem.country}</span>
              <span className="coffee-price">{coffeeItem.price}</span>
            </div>
            <span className="coffee-item-description">
              <strong>Description: </strong>
              {coffeeItem.description}
            </span>
          </div>
          {/* card+description flex*/}
        </div>

        {/* card+description flex container end*/}
      </section>
    </>
  );
}

export default CoffeeCard;
