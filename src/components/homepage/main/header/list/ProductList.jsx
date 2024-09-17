import React, { useState } from 'react';
import style from './ProductList.module.css';
import ModalComponent from '../../../../modalComponent/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { changeFemaleSelectedIndex, changeMaleSelectedIndex } from '../../../../../store/reducers/productTypeReducer';

function ProductList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filters = useSelector((state) => state.productTypeReducer.filters);
    const products = useSelector((state) => state.productTypeReducer.productTypes);
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
        <div className={style.ProductList}>
            {products.filter(p => p.gender === filters.gender).map((product, index) => (
                <div style={{ border: selectedIndex=== index ? '2px solid black' : 'none' }} key={index} onClick={() => onClick(index)} >
                    <img width={'50px'} height={'50px'} src={product.imgUrl} />
                    <div>
                        {product.name}
                    </div>
                </div>
            ))}
            <div className={style.plyus} onClick={handleOpenModal}>+</div>
            <ModalComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal} />
        </div>
    );
}

export default ProductList;