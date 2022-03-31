import ProductCard from "../../../MainPage/components/MainPageOurBest/components/ProductCard"
import "./GoodsPageFeatured.scss"
import {Link} from "react-router-dom"

function GoodsPageFeatured(props) {
    const featuredProducts = props.goodspageFeaturedState.Products.map(item => {
        return (
            item.best ? null :  <ProductCard key={item.id} item={item} />
        )
    })
    return (
        <section className="goods-featured-section">
        {featuredProducts} 
        </section>
    )
}

export default GoodsPageFeatured;