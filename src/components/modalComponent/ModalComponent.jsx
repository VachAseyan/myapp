import React, { useState } from 'react';
import style from './ModalComponent.module.css';
import woman from "../../assets/woman.png";
import man from "../../assets/man.png"
import { useDispatch } from 'react-redux';
import { createNewProductType } from '../../store/reducers/productTypeReducer';

function ModalComponent({ isOpen, onClose }) {
    const [name, setName] = useState(undefined)
    const [gender, setGender] = useState('female')
    const [imgUrl, setImgUrl] = useState(undefined)

    const dispatch = useDispatch()

    const close = () => {
        onClose()
        setName(undefined)
        setImgUrl(undefined)
    }

    const add = () => {
        if (!name) {
            alert('Fill the category')
            return
        }

        if (!imgUrl) {
            alert('Select the image')
            return
        }

        dispatch(createNewProductType({
            name,
            gender,
            imgUrl
        }))

        close()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImgUrl(imageUrl);
        }
    }

    if (!isOpen) return null;

    return (
        <div className={style.modalOverlay}>
            <div className={style.modal}>
                <button onClick={close} className={style.closeButton}>X</button>
                <h2>Ավելացնել տեսակը</h2>
                <div className={style.mans}>
                    <div
                        className={style.gender}
                        onClick={() => setGender('female')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: gender === 'female' ? 'blue' : 'white'
                        }}>
                        <img style={{
                            width: "25px",
                            height: "25px"
                        }} src={woman} alt="" />
                        <p>Կանացի</p>
                    </div>
                    <div
                        className={style.gender}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: gender === 'male' ? 'blue' : 'white'
                        }}
                        onClick={() => setGender('male')}>
                        <img style={{
                            width: "25px",
                            height: "25px"
                        }} src={man} alt="" />
                        <p>Տղամարդու</p>
                    </div>
                </div>
                <input
                    className={style.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Տեսակը" />
                <div>
                    <label htmlFor="upload-photo">Ներբեռնել նկարը</label>
                    <input
                        type="file"
                        id="upload-photo"
                        accept="image/*"
                        onChange={handleFileChange} />
                    {imgUrl &&
                        <img width={'50px'} height={'50px'} src={imgUrl} />
                    }
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