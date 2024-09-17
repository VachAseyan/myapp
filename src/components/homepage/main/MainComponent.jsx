import style from "./MainComponents.module.css"
import Header from "./header/Header";
import Types from "./types/Types";

function MainComponent() {
    return (
        <div className={style.MainComponent}>
            <Header />
            <Types />
        </div>
    )
}

export default MainComponent;