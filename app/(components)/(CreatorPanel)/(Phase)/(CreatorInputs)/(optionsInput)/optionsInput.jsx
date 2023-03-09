'use client'

import Arrow from "../../../../(Arrow)/Arrow";
import styles from "../Inputs.module.css"

const OptionsInput = ({ options, label }) => {
    console.log(options)
    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <select className={styles.optionsInput} >
                <option className={styles.option} disabled  >***Make a selection***</option>
                {options !== "undefined" ? options : ""}
            </select>
        </section>
        
    );
};

export default OptionsInput;