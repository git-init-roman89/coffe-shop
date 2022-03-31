import "./ProductCard.scss";
import { Link } from "react-router-dom";
function ProductCard({ item }) {
  {
    /* change best-coffe-item to coffee-item*/
  }
  return (
    <Link to={`/coffee/${item.id}`}>
      <div className="best-coffee-item">
        <img
          src={item.photo}
          alt="two packages of coffee"
          className="best-coffee-img"
        />
        <span className="best-coffee-title">{item.title}</span>
        <span className="best-coffee-subtitle">{item.country}</span>
        <span className="best-coffee-price">{item.price}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
