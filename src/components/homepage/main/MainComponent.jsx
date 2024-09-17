import style from "./MainComponents.module.css"
import AllProduct from "./allProducts/AllProducts";
import Header from "./header/Header";
import Types from "./types/Types";

function MainComponent() {
    return (
        <div className={style.MainComponent}>
            <Header />
            <Types />
            <AllProduct />
        </div>
    )
}

export default MainComponent;