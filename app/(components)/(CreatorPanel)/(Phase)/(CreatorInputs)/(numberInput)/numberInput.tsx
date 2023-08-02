import styles from "../Inputs.module.css";

const NumberInput = ({value, min, max, dispatched, label}:{
    value?: number,
    min?: number,
    max?: number,
    dispatched: (value: number) => void,
    label: string
}) => {
    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <input value={value ? value : 1} className={styles.numberInput} onChange={e => dispatched(parseInt(e.currentTarget.value))} type="number" min={`${min ? min : ""}`} max={`${max ? max : ""}`} />
        </section>
    );
};

export default NumberInput;