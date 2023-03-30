'use client'
import styles from './PopUpFooter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../../utils/firebaseUtils/firebaseUtils";
import { setDidUpload, setIsNewItemPortalOpen, clearNewEntryPortalDocument } from "../../../../redux/slices/portalSlice";

const PopUpFooter = ({ newEntryType }) => {
    const dispatch = useDispatch();
    const { newEntryDocument } = useSelector(state => state.newEntryPortal);
    const { createdAt } = useSelector(state => state.schedule.scheduleData.createdAt);
    const { updatedAt } = useSelector(state => state.schedule.scheduleData.updatedAt);
    const saveNewEntry = async (entryType, db, newEntryDocument) => {
        try {
            await setDoc(doc(db, entryType, newEntryDocument.name.replace(" ", "_")), newEntryDocument);

            dispatch(setIsNewItemPortalOpen(false))
            dispatch(clearNewEntryPortalDocument({}));
            dispatch(setDidUpload(true));
        } catch (error) {
            console.error("This is a popUpFooter error: ", error);
            dispatch(setIsNewItemPortalOpen(false))
            dispatch(clearNewEntryPortalDocument({}));
            dispatch(setDidUpload(false));
        }
    }

    return (
        <section className={styles.popUpFooter} >
            <p className={`${styles.button} ${styles.cancel}`} onClick={e => {
                dispatch(setIsNewItemPortalOpen(false));
                dispatch(clearNewEntryPortalDocument({}));
            }} >Cancel</p>
            <p className={`${styles.button} ${styles.add}`} onClick={e => saveNewEntry(newEntryType, db, newEntryDocument)} >Add</p>
        </section>
    );

    //every time the portal is open, clear the new entry document
};

export default PopUpFooter;