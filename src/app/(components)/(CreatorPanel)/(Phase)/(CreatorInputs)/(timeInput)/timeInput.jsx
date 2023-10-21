'use client'
import styles from '../Inputs.module.css';

const TimeInput = ({ value, label, dispatched }) => {


    return (
        <>
        <label className={styles.inputLabel} >{label}</label>
        <input className={styles.optionsInput} type="time" defaultValue={value} onChange={e => dispatched(e.target.value)} />
        </>
    );
};

export default TimeInput;