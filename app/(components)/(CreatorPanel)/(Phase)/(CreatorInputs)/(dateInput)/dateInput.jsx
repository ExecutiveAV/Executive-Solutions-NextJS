import styles from '../Inputs.module.css';

const DateInput = ({ label, dispatched }) => {
    return (
        <section>
            <label className={styles.inputLabel} >{label}</label>
            <input className={styles.optionsInput} type="date" onChange={e => dispatched(e.currentTarget.value)} />
        </section>
    );
};

export default DateInput;