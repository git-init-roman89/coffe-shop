import ProductCard from "../../../MainPage/components/MainPageOurBest/components/ProductCard"
import "./GoodsPageFeatured.scss"

function GoodsPageFeatured(props) {
    const featuredProducts = props.goodspageFeaturedState.Products.map(item => {
        return (
            item.best ? null : <ProductCard key={item.id} productCardState={props.goodspageFeaturedState}/> 
        )
    })
    return (
        <section className="goods-featured-section">
        {featuredProducts} 
        </section>
    )
}

export default GoodsPageFeatured;