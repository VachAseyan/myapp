import React, { useState } from 'react';
import style from "./ProductModal.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from "../../store/reducers/productTypeReducer";
import ProductList from '../homepage/main/header/list/ProductList';
import People from "../homepage/main/header/people/People"
import Types from '../homepage/main/types/Types';

function ModalComponent({ isOpen, onClose }) {
    const [imgUrl, setImgUrl] = useState(undefined);
    const [article, setArticle] = useState(undefined);
    const [price, setPrice] = useState(undefined);

    const filters = useSelector((state) => state.productTypeReducer.filters);
    const isFemale = filters.gender === 'female';
    const products = useSelector((state) => {
        if (isFemale) {
            return state.productTypeReducer.femaleProductTypes
        }
        return state.productTypeReducer.maleProductTypes
    });
    const currentProduct = products[isFemale ? filters.femaleTypeIndex : filters.maleTypeIndex]
    const currentSubTypeIndex = isFemale ? filters.femaleSubTypeIndex : filters.maleSubTypeIndex
    const currentSubType = currentProduct && currentProduct.subTypes ? currentProduct.subTypes[currentSubTypeIndex] : undefined

    const dispatch = useDispatch();

    const close = () => {
        onClose();
        setImgUrl(undefined);
        setArticle(undefined);
        setPrice(undefined);
    };

    const add = () => {
        console.log('product type', currentProduct)
        console.log('product sub type', currentSubType)
        if (!currentProduct || !currentSubType) {
            alert('Select types')
            return;
        }
        if (!imgUrl) {
            alert('Select the image');
            return;
        }
        if (!article) {
            alert('Select the article');
            return;
        }
        if (!price) {
            alert('Select the price');
            return;
        }

        dispatch(addNewProduct({
            article,
            price,
            imgUrl
        }))

        close();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImgUrl(imageUrl);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={style.modalOverlay}>

            <div className={style.modal}>
                <h2>Ավելացնել ապրանքներ</h2>
                <div style={{
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: "column"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }} >
                        <People />
                        <ProductList showPlusButton={false} />
                    </div>

                    <div style={{
                        width: "860px",
                    }} >
                        <Types
                            showPlusButton={false} />
                    </div>

                </div>

                <button onClick={close} className={style.closeButton}>X</button>


                <div className={style.modalPage}>
                    <input
                        type="file"
                        id="upload-photo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={style.fileInput} />
                    {imgUrl &&
                        <div className={style.imgPreview}>
                            <img width={'100px'} height={'100px'} src={imgUrl} alt="Preview" />
                        </div>
                    }
                    <div className={style.inputList}>
                        <input
                            className={style.input}
                            type="text"
                            value={article}
                            onChange={e => setArticle(e.target.value)}
                            placeholder="Համարը" />
                        <input
                            className={style.input}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            placeholder="Գին" />
                    </div>
                </div>
                <button
                    className={style.submitButton}
                    onClick={add}>
                    Ավելացնել
                </button>
            </div>
        </div>
    );
}

export default ModalComponent;
