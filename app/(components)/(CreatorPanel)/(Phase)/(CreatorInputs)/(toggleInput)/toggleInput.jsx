'use client'
import styles from '../Inputs.module.css';

import { useState } from 'react';

const ToggleInput = ({ label, value, onChange, id }) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <label className={styles.inputLabel} >{label}</label>
            <label className={styles.switch} htmlFor={id} >
                <input id={id} type={'checkbox'} checked={isOn} onChange={handleClick} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
        
    );
};

export default ToggleInput;