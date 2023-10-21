'use client'

import styles from '../Inputs.module.css';

const TextInput = ({ value, label, dispatched }:{
    value?: string,
    label: string,
    dispatched: (value: any) => void
}) => {
    return (
        <section>
            <label className={styles.inputLabel} >{label}</label>
            <input defaultValue={value} className={styles.optionsInput} type="text" onChange={e => dispatched(e.currentTarget.value)} />
        </section>
    );
}

export default TextInput;