import style from "./HomePage.module.css";
import MainComponent from "./main/MainComponent";

function HomePage() {
    return (
        <div className={style.HomePage}>
            <MainComponent />
        </div>
    )
}

export default HomePage;