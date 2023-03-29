'use client'

import { useSelector, useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen } from '../../../../redux/slices/newEntryPortalSlice';

import Arrow from "../../../../(Arrow)/Arrow";
import styles from "../Inputs.module.css"

const OptionsInput = ({ options, label, entryType }) => {
    console.log(options)

    const dispatch = useDispatch();

    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <select className={styles.optionsInput} value="" >
                <option className={styles.option} selected disabled  >***Make a selection***</option>
                {options !== "undefined" ? options : ""}
                <option className={styles.option} entryType={entryType}  >***New Entry***</option>
            </select>
        </section>
        
    );
};

export default OptionsInput;