import styles from "../Inputs.module.css";

const NumberInput = ({value, min, max, dispatched, label}:{
    value?: number,
    min?: number,
    max?: number,
    dispatched: (value: number) => void,
    label: string
}) => {
    console.log(value)
    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <input defaultValue={value ? value : 1} className={styles.numberInput} onChange={e => dispatched(parseInt(e.currentTarget.value))} type="number" min={`${min ? min : ""}`} max={`${max ? max : ""}`} />
        </section>
    );
};

export default NumberInput;