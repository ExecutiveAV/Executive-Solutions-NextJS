import styles from "../Inputs.module.css";

const NumberInput = ({min, max, dispatched, label}) => {
    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <input className={styles.numberInput} onChange={e => dispatched(e.currentTarget.value)} type="number" min={`${min ? min : ""}`} max={`${max ? max : ""}`} />
        </section>
    );
};

export default NumberInput;