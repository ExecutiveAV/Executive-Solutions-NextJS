'use client'

import { db } from "../../../../../../utils/firebaseUtils/firebaseUtils";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewEntryPortalDocument, setIsNewItemPortalOpen, setNewEntryPortalType } from "../../../../../redux/slices/portalSlice";
import { setNewEntryKind } from "../../../../../redux/slices/newEntrySlice";

import styles from "../Inputs.module.css"

const OptionsInput = ({ value, label, entryType, action, dispatched }) => {

    const [options, setOptions] = useState({
        optionIds: [],
        optionData: {}
    });

    const fetchDB = async (kind) => {
        try {
            const group = await getDocs(collection(db, kind));
            const items = {
                optionIds: [],
                optionData: {}
            };
            group.forEach(doc => {
                items.optionIds.push(doc.id);
                items.optionData[doc.id] = doc.data();
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
        dispatch(setNewEntryKind(entryType));
        
        } else {
            dispatch(dispatched(options.optionData[value.replaceAll(" ", "_")]));
        };
    };


    return (
        <section >
            <label className={styles.inputLabel} >{label}</label>
            <select className={styles.optionsInput} value={value ? value : "***Make a selection***"} onChange={e => newSelected(e.target.value, entryType)} >
                <option className={styles.option} disabled  >***Make a selection***</option>
                {options !== "undefined" ?
                options.optionIds.map(option => (
                    <option key={`Opt${options.optionData[option]}`} className={styles.option} id={option} >{option.replaceAll("_", " ")}</option>
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