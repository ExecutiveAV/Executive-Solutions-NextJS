'use client'
import styles from '../Inputs.module.css';



import { useState } from 'react';

const ToggleInput = ( {label, value, dispatched, id} : {label: string, value: boolean, dispatched: Function, id: string} ) => {

    const handleClick = () => {
        dispatched(!value);
    };

    return (
        <>
            <label className={styles.inputLabel} >{label}</label>
            <label className={styles.switch} htmlFor={id} >
                <input id={id} type={'checkbox'} defaultChecked={value} onChange={handleClick} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
        
    );
};

export default ToggleInput;