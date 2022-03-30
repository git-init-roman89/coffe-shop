import {GoodsPageFeatured, GoodsPageAbout, GoodsPagePromo} from "./components/index";
import "./GoodsPage.scss"

function GoodsPage(props) {
    return (
        <main className="goodspage-container">
        <GoodsPagePromo />
        <GoodsPageAbout />
        <GoodsPageFeatured goodspageFeaturedState={props.goodspageState} />
        </main>
    )
}

export default GoodsPage;