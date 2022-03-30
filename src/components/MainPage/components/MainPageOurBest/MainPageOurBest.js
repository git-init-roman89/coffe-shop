import ProductCard from "./components/ProductCard";
import "./MainPageOurBest.scss";


function MainPageOurBest(props) {

    const bestProducts = props.mainpageOurBest.Products.map(item => {
      return (
          item.best ? <ProductCard key={item.id} productCardState={props.mainpageOurBest}/> : null
      )
  })
    return (
        <section className="mainpage-our-best-section">
        <article className="mainpage-our-best">
          <h2 className="mainpage-our-best-header">Our Best</h2>
              <div className="best-coffee-container">
                {bestProducts}
              </div>
        </article>
      </section>
    )
}

export default MainPageOurBest;