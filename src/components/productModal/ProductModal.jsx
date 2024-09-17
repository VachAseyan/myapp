import React, { useState } from 'react';
import styles from './ProductModal.module.css';

function ProductModal() {

    return (
        <div className={styles.modalContainer}>

            <div className={styles.tabContent}>
                <div>
                    <div className={styles.formGroup}>
                        <label>Артикул</label>
                        <input type="text" className={styles.input} placeholder="Enter article number" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Цена</label>
                        <input type="text" className={styles.input} placeholder="Enter price" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Загрузить Фото</label>
                        <input type="file" className={styles.fileInput} />
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.submitButton}>Добавить</button>
            </div>
        </div>
    );
}

export default ProductModal;
