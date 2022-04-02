import "./ProductCard.scss";
import { Link } from "react-router-dom";
function ProductCard({ item, itemShadow=false }) {

  return (
    <Link to={`/coffee/${item.id}`}>
      <div className={`coffee-item ${itemShadow ? "coffe-item-shadow" : ""}`}>
        <img
          src={item.photo}
          alt="two packages of coffee"
          className="coffee-img"
        />
        <span className="coffee-title">{item.title}</span>
        <span className="coffee-subtitle">{item.country}</span>
        <span className="coffee-price">{item.price}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
