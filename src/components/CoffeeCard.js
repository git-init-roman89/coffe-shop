import {useParams} from "react-router-dom";
function CoffeeCard(props) {
    let {id} = useParams();
    const products = props.goodspageState.Products;
    console.log(products)
    const coffeeItem = products.find(item => {
        console.log(item)
        return +id === item.id
    })
    
    return (
        <div className="best-coffee-item">
        <img
          src={coffeeItem.photo}
          alt="two packages of coffee"
          className="best-coffee-img"
        />
        <span className="best-coffee-title">{coffeeItem.title}</span>
        <span className="best-coffee-subtitle">{coffeeItem.country}</span>
        <span className="best-coffee-price">{coffeeItem.price}</span>
      </div>
    )
}

export default CoffeeCard;