// import style from "./SubTypeModal.module.css";

// function SubTypeModal(isOpen, onClose) {
//     if (!isOpen) return null;
//     return (
//         <div style={{ width: "345px", height: "163px", display: "flex", alignItems: "center", justifyContent: "center" }}>
//             <div className={style.modalOverlay}>
//                 <div className={style.modal}>
//                     <button onClick={close} className={style.closeButton}>X</button>
//                     <h2>Добавить Категория</h2>
//                     <div className={style.mans}>
//                         <div
//                             className={style.gender}
//                             onClick={() => setGender('female')}
//                             style={{
//                                 cursor: 'pointer',
//                                 backgroundColor: gender === 'female' ? 'blue' : 'white'
//                             }}>
//                             <img src={woman} alt="" />
//                             <p>Женский</p>
//                         </div>
//                         <div
//                             className={style.gender}
//                             style={{
//                                 cursor: 'pointer',
//                                 backgroundColor: gender === 'male' ? 'blue' : 'white'
//                             }}
//                             onClick={() => setGender('male')}>
//                             <img src={man} alt="" />
//                             <p>Мужской</p>
//                         </div>
//                     </div>
//                     <input
//                         className={style.input}
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         type="text"
//                         placeholder="Категория" />
//                     <div>
//                         <label htmlFor="upload-photo">Загрузить Фото</label>
//                         <input
//                             type="file"
//                             id="upload-photo"
//                             accept="image/*"
//                             onChange={handleFileChange} />
//                         {imgUrl &&
//                             <img width={'50px'} height={'50px'} src={imgUrl} />
//                         }
//                     </div>
//                     <button
//                         className={style.submitButton}
//                         onClick={add}>
//                         Добавить
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }