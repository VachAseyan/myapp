import React, { useState } from "react";
import styles from "./Types.module.css";

function Types() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Кольцо", "Обручальные", "Кольца Кастеты", "Коктейльные", "Помолвочные"];


    return (
        <div className={styles.tabsContainer}>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab}
                </div>
            ))}
            <div className={styles.plusIcon} >+</div>
        </div>
    );
}

export default Types;