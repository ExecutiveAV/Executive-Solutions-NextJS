import styles from '../Inputs.module.css';

const DateInput = ({ label, value, onChange }) => {
    return (
        <section>
            <label className={styles.inputLabel} >{label}</label>
            <input className={styles.dateInput} type="date" value={value} onChange={e => onChange(e.currentTarget.value)} />
        </section>
    );
};

export default DateInput;