import { useState } from "react";
import ProductCard from "../../../MainPage/components/MainPageOurBest/components/ProductCard";
import "./CoffeePageFeatured.scss";

function CoffeePageFeatured(props) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
  };

  const featuredProducts = props.coffeepageFeaturedState.Products
  .filter(item => {
      return item.title.toLowerCase().startsWith(inputText.toLowerCase())
  })
  .map(
    (item) => {
      return <ProductCard key={item.id} item={item} input={inputText} itemShadow />;
    }
  );
  return (
    <section className="coffee-featured-section">
      <div className="coffee-featured-search">
        <form className="coffee-search-form">
          <span className="coffe-search-title">Looking for</span>
          <input
            type="text"
            placeholder="start your search..."
            onChange={inputHandler}
            className="coffe-search-input"
          />
        </form>
        <div className="coffee-search-buttons">
          <span className="coffe-search-title">Or filter</span>
          <div className="coffe-buttons-container">
            <button className="coffe-button">Brazil</button>
            <button className="coffe-button">Kenya</button>
            <button className="coffe-button">Columbia</button>
          </div>
        </div>
      </div>
      {featuredProducts}
    </section>
  );
}

export default CoffeePageFeatured;
