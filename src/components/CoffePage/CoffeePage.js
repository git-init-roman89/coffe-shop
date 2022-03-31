import {CoffeePagePromo, CoffeePageFeatured, CoffeePageAbout} from "./components/index";
import "./CoffeePage.scss"

function CoffeePage(props) {
    return (
        <main className="coffeepage-container">
        <CoffeePagePromo />
        <CoffeePageAbout />
        <CoffeePageFeatured coffeepageFeaturedState={props.coffeepageState} />
        </main>
    )
}

export default CoffeePage;