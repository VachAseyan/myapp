import React, { useState } from 'react';
import style from './ProductList.module.css';
import ModalComponent from '../../../../modalComponent/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { changeFemaleSelectedIndex, changeMaleSelectedIndex } from '../../../../../store/reducers/productTypeReducer';

function ProductList({ showPlusButton = true }) { // Default to true
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filters = useSelector((state) => state.productTypeReducer.filters);
    const products = useSelector((state) => {
        if (filters.gender === 'female') {
            return state.productTypeReducer.femaleProductTypes
        }
        return state.productTypeReducer.maleProductTypes
    });
    const dispatch = useDispatch();
    const selectedIndex = filters.gender === 'female' ? filters.femaleTypeIndex : filters.maleTypeIndex

    const onClick = (index) => {
        if (filters.gender === "female") {
            dispatch(changeFemaleSelectedIndex(index))
        } else {
            dispatch(changeMaleSelectedIndex(index))
        }
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.ProductList} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            {products.filter(p => p.gender === filters.gender).map((product, index) => (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.5)",
                        width: '140px',
                        height: '80px',
                        border: selectedIndex === index ? '2px solid #939393' : 'none',
                        borderRadius: selectedIndex === index ? '5px' : 'none'
                    }}
                    key={index}
                    onClick={() => onClick(index)}
                >
                    <img width={'50px'} height={'50px'} src={product.imgUrl} alt={product.name} />
                    <div>
                        {product.name}
                    </div>
                </div>
            ))}
            {showPlusButton && ( // Conditionally render the + button
                <div className={style.plyus} onClick={handleOpenModal} style={{
                    fontSize: "25px",
                    color: "gray",
                    cursor: "pointer"
                }}>+</div>
            )}
            <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal} />
        </div>
    );
}

export default ProductList;
