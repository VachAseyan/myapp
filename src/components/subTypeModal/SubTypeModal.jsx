
import styles from "./SubTypeModal.module.css";

function SubTypeModal({ onClose }) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span>Product</span>
                    <span>Добавить Подкатегория</span>
                    <button onClick={onClose} className={styles.closeButton}>✕</button>
                </div>
                <div className={styles.modalBody}>
                    <input type="text" placeholder="Подкатегория" className={styles.inputField} />
                    <button className={styles.addButton}>Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default SubTypeModal;