import style from "./Header.module.css";
import People from "./people/People";
import ProductList from "./list/ProductList";
import { useSelector } from "react-redux";

function Header() {
    return (
        <div className={style.Header}>
            <People />
            <ProductList showPlusButton={true}/>
        </div>
    )
}

export default Header;