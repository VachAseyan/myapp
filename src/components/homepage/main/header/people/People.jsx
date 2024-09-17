import style from "./People.module.css";
import woman from "../../../../../assets/woman.png";
import man from "../../../../../assets/man.png";
import { useDispatch, useSelector } from "react-redux";
import { changeGenderFilter } from "../../../../../store/reducers/productTypeReducer";

function People() {
    const filters = useSelector((state) => state.productTypeReducer.filters);
    const dispatch = useDispatch()

    const change = (gender)=>{
        dispatch(changeGenderFilter(gender))
    }

    return (
        <div className={style.People}>
            <div style={{ 
                backgroundColor : filters.gender === 'female' ? 'blue' : 'white' 
                }}
                onClick={() => change('female')}>
                <img width={'30px'} height={'30px'} src={woman} alt="" /></div>
            <div style={{ 
                backgroundColor : filters.gender === 'male' ? 'blue' : 'white'  
                }}
                onClick={() => change('male')}>
                    <img width={'30px'} height={'30px'} src={man} alt="" />
                </div>
        </div >
    )
}

export default People;