import woman from "../../../../../assets/woman.png";
import man from "../../../../../assets/man.png";
import { useDispatch, useSelector } from "react-redux";
import { changeGenderFilter } from "../../../../../store/reducers/productTypeReducer";

function People() {
    const filters = useSelector((state) => state.productTypeReducer.filters);
    const dispatch = useDispatch();

    const change = (gender) => {
        dispatch(changeGenderFilter(gender));
    };

    const commonStyle = {
        width: '40px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        border: '1px solid black',
        boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 1s',
    };

    const imgStyle = {
        width: '20px',
        height: 'auto',
    };

    return (
        <div style={{
            width: '50px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
        }}>
            <div
                style={{
                    ...commonStyle,
                    backgroundColor: filters.gender === 'female' ? 'blue' : '#FFFFFF',
                }}
                onClick={() => change('female')}
            >
                <img style={imgStyle} src={woman} alt="Woman" />
            </div>
            <div
                style={{
                    ...commonStyle,
                    backgroundColor: filters.gender === 'male' ? 'blue' : '#FFFFFF',
                }}
                onClick={() => change('male')}
            >
                <img style={imgStyle} src={man} alt="Man" />
            </div>
        </div>
    );
}

export default People;
