import React, { useState } from 'react';
import style from "./ProductModal.module.css"
import Header from "../homepage/main/header/Header"
import { useDispatch } from 'react-redux';

function ModalComponent({ isOpen, onClose }) {
    const [imgUrl, setImgUrl] = useState(undefined);
    const [article, setArticle] = useState('');

    const dispatch = useDispatch();

    const close = () => {
        onClose();
        setImgUrl(undefined);
        setArticle('');
    };

    const add = () => {

        if (!imgUrl) {
            alert('Select the image');
            return;
        }


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
                <button onClick={close} className={style.closeButton}>X</button>
                <h2>Добавить Категория</h2>
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
                            placeholder="Артикул" />
                        <input
                            className={style.input}
                            value={article}
                            onChange={(e) => setArticle(e.target.value)}
                            type="text"
                            placeholder="Цена" />
                    </div>
                </div>
                <button
                    className={style.submitButton}
                    onClick={add}>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default ModalComponent;
