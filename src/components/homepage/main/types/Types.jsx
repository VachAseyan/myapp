import { useState } from "react";
import styles from "./Types.module.css";
import SubTypeModal from "../../../subTypeModal/SubTypeModal";

function Types() {
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const tabs = ["Кольцо", "Обручальные", "Кольца Кастеты", "Коктейльные", "Помолвочные"];

    const openModal = () => {
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
                    onClick={() => setActiveTab(index)}
                >
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
