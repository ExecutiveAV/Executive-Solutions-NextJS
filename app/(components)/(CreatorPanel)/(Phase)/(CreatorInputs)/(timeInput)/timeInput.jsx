'use client'

import { useSelector } from 'react-redux';

import styles from '../Inputs.module.css';

const TimeInput = ({ label, dispatched, entryType }) => {

    const currentShiftTime = useSelector(state => state.schedule.scheduleData.days[state.schedule.current.day].shifts[state.schedule.current.shift][entryType]);

    return (
        <>
        <label className={styles.inputLabel} >{label}</label>
        <input className={styles.optionsInput} type="time" value={currentShiftTime} onChange={e => dispatched(e.target.value)} />
        </>
    );
};

export default TimeInput;