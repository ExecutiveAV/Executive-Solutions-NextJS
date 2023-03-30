'use client'

import { useSelector, useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen, setNewEntryPortalType } from "../../../../../redux/slices/portalSlice";

import Arrow from "../../../../(Arrow)/Arrow";
import styles from "../Inputs.module.css"

const OptionsInput = ({ options, label, entryType, action }) => {

    const dispatch = useDispatch();

    const portalOpener = async (portalType) => {
        dispatch(setNewEntryPortalType(portalType));
        dispatch(setIsNewItemPortalOpen(true));
    };

    const newSelected = async (value, action, entryType) => {
        if (value === "New") {
        portalOpener(entryType);
        
        } else {
            action(value);
        };
    };

    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <select className={styles.optionsInput} onChange={e => newSelected(e.target.value, action, entryType)} >
                <option className={styles.option} selected disabled  >***Make a selection***</option>
                {options !== "undefined" ? options : ""}
                <option className={styles.option} >New</option>
            </select>
        </section>
        
    );
};

export default OptionsInput;