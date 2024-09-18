
import styles from "./SubTypeModal.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewSubType} from "../../store/reducers/productTypeReducer";

function SubTypeModal({ onClose }) {
    const [subType, setSubType] = useState(undefined)
    const filters = useSelector((state) => state.productTypeReducer.filters);
    const products = useSelector((state) => {
        if (filters.gender === 'female') {
            return state.productTypeReducer.femaleProductTypes
        }
        return state.productTypeReducer.maleProductTypes
    });

    const currentProduct = products[filters.gender === 'female' ? filters.femaleTypeIndex : filters.maleTypeIndex]
    const dispatch = useDispatch()

    const add = () => {
        dispatch(addNewSubType({ name: currentProduct.name, subTypeName: subType }))
        onClose()
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span>{currentProduct.name}:</span>
                    <span>Ավելացնել ենթատեսակը</span>
                    <button onClick={onClose} className={styles.closeButton}>✕</button>
                </div>
                <div className={styles.modalBody}>
                    <input
                      type="text"
                      placeholder="Ենթատեսակը"
                      value={subType}
                      onChange={e => setSubType(e.target.value)}
                      className={styles.inputField} />
                    <button onClick={add} className={styles.addButton}>Ավելացնել</button>
                </div>
            </div>
        </div>
    );
}

export default SubTypeModal;