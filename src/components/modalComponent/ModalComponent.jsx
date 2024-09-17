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
            alert('Fill the name')
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
                <h2>Добавить Категория</h2>
                <div className={style.mans}>
                    <div 
                        className={style.gender}
                        onClick={() => setGender('female')}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: gender === 'female' ? 'blue' : 'white'
                        }}>
                        <img src={woman} alt="" />
                        <p>Женский</p>
                    </div>
                    <div 
                        className={style.gender}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: gender === 'male' ? 'blue' : 'white'
                        }}
                        onClick={() => setGender('male')}>
                        <img src={man} alt="" />
                        <p>Мужской</p>
                    </div>
                </div>
                <input 
                    className={style.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Категория" />
                <div>
                    <label htmlFor="upload-photo">Загрузить Фото</label>
                    <input 
                        type="file" 
                        id="upload-photo"
                        accept="image/*"
                        onChange={handleFileChange}/>
                    { imgUrl &&
                        <img width={'50px'} height={'50px'} src={imgUrl}/>
                    }
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