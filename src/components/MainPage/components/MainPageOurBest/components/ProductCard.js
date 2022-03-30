import "./ProductCard.scss";

function ProductCard(props) {
        
    return (
        <div className="best-coffee-item">
        <img src="photo" alt="two packages of coffee" className="best-coffee-img" />
        <span className="best-coffee-title">title</span>
        <span className="best-coffee-subtitle">country</span>
        <span className="best-coffee-price">price</span>
    </div>

    )
}

export default ProductCard;