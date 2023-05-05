'use client'

import { dateSelector } from '../../../../../redux/selectors/scheduleSelectors';

import { useSelector } from 'react-redux';

import styles from '../Inputs.module.css';

const DateInput = ({ value, label, dispatched }) => {
    return (
        <section>
            <label className={styles.inputLabel} >{label}</label>
            <input defaultValue={value} className={styles.optionsInput} type="date" onChange={e => dispatched(e.currentTarget.value)} />
        </section>
    );
};

export default DateInput;