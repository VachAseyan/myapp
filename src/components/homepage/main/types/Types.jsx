import {useEffect, useState} from "react";
import styles from "./Types.module.css";
import SubTypeModal from "../../../subTypeModal/SubTypeModal";
import {useDispatch, useSelector} from "react-redux";
import {
  changeFemaleSubTypeSelectedIndex,
  changeMaleSubTypeSelectedIndex
} from "../../../../store/reducers/productTypeReducer";

function Types() {
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filters = useSelector((state) => state.productTypeReducer.filters);
    const products = useSelector((state) => {
      if (filters.gender === 'female') {
        return state.productTypeReducer.femaleProductTypes
      }
      return state.productTypeReducer.maleProductTypes
    });

    const currentProduct = products[filters.gender === 'female' ? filters.femaleTypeIndex : filters.maleTypeIndex]
    const tabs = currentProduct && currentProduct.subTypes ? currentProduct.subTypes.map(st => st.name): []

    const dispatch = useDispatch()

    useEffect(() => {
      if(filters) {
        setActiveTab(filters.gender === 'female' ? filters.femaleSubTypeIndex : filters.maleSubTypeIndex)
        console.log('xiii', filters.gender === 'female' ? filters.femaleSubTypeIndex : filters.maleSubTypeIndex)
      }
    }, [filters])

    const handleTabChange = (index) => {
      if (filters.gender === 'female') {
        dispatch(changeFemaleSubTypeSelectedIndex(index))
      } else {
        dispatch(changeMaleSubTypeSelectedIndex(index))
      }
    }

    const openModal = () => {
      if (!products.length) {
        alert('Select at least one product')
        return
      }
      setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.tabsContainer}>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={styles.tab}
                    onClick={() => handleTabChange(index)}>
                    {tab}
                </div>
            ))}
            <div
                className={styles.slideIndicator}
                style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
            <div className={styles.plusIcon} onClick={openModal}>
                +
            </div>

            {isModalOpen && (
                <SubTypeModal onClose={closeModal} />
            )}
        </div>
    );
}

export default Types;
