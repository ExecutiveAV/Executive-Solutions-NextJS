'use client'

import { db } from "../../../../../../utils/firebaseUtils/firebaseUtils";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen, setNewEntryPortalType } from "../../../../../redux/slices/portalSlice";

import Arrow from "../../../../(Arrow)/Arrow";
import styles from "../Inputs.module.css"

const OptionsInput = ({ value, label, entryType, action, dispatched }) => {

    const [options, setOptions] = useState("undefined");

    const fetchDB = async (kind) => {
        try {
            const group = await getDocs(collection(db, kind));
            const items = [];
            group.forEach(doc => {
                items.push([doc.id.replaceAll("_", " ")]);
            });
            setOptions(items);
        } catch (e) {
            console.error(e);
        }
        
    };
    
    useEffect(() => {
        fetchDB(entryType);
    }, []);

    const dispatch = useDispatch();

    const portalOpener = async (portalType) => {
        dispatch(setNewEntryPortalType(portalType));
        dispatch(setIsNewItemPortalOpen(true));
    };

    const newSelected = async (value, entryType) => {
        if (value === "New") {
        portalOpener(entryType);
        
        } else {
            dispatch(dispatched(value));
        };
    };

    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <select className={styles.optionsInput} value={value} onChange={e => newSelected(e.target.value, entryType)} >
                <option className={styles.option} selected disabled  >***Make a selection***</option>
                {options !== "undefined" ?
                options.map(option => (
                    <option key={`Opt${option}`} className={styles.option} >{option}</option>
                )
                ) :
                ""
                }  
                <option className={styles.option} >New</option>
            </select>
        </section>
        
    );
};

export default OptionsInput;