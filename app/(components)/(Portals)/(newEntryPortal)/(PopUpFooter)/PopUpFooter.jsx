'use client'
import styles from './PopUpFooter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../utils/firebaseUtils/firebaseUtils";
import { setDidUpload, setIsNewItemPortalOpen, clearNewEntryPortalDocument } from "../../../../redux/slices/portalSlice";
import { setNewEntryKind, resetNewEntryCompany, resetNewEntryContractor, resetNewEntryPosition, resetNewEntryVenue, checkNewEntryCompanyValidation, checkNewEntryContractorValidation, checkNewEntryPositionValidation, checkNewEntryVenueValidation } from '../../../../redux/slices/newEntrySlice';
import { newEntryKindSelector, newEntryCompanyNameSelector, newEntryContractorNameSelector, newEntryPositionNameSelector, newEntryVenueNameSelector, newEntryCompanySelector, newEntryVenueSelector, newEntryContractorSelector, newEntryPositionSelector, newEntryCompanyIsValidSelector, newEntryVenueIsValidSelector, newEntryContractorIsValidSelector, newEntryPositionIsValidSelector } from '../../../../redux/selectors/newEntrySelectors';
import { useEffect } from 'react';

const PopUpFooter = () => {
    const dispatch = useDispatch();

    const newEntryKind = useSelector(newEntryKindSelector);
    const newEntryCompanyName = useSelector(newEntryCompanyNameSelector);
    const newEntryContractorName = useSelector(newEntryContractorNameSelector);
    const newEntryPositionName = useSelector(newEntryPositionNameSelector);
    const newEntryVenueName = useSelector(newEntryVenueNameSelector);
    const newEntryCompany = useSelector(newEntryCompanySelector);
    const newEntryVenue = useSelector(newEntryVenueSelector);
    const newEntryContractor = useSelector(newEntryContractorSelector);
    const newEntryPosition = useSelector(newEntryPositionSelector);

    const newEntryCompanyIsValid = useSelector(newEntryCompanyIsValidSelector);
    const newEntryVenueIsValid = useSelector(newEntryVenueIsValidSelector);
    const newEntryContractorIsValid = useSelector(newEntryContractorIsValidSelector);
    const newEntryPositionIsValid = useSelector(newEntryPositionIsValidSelector);


    const getDocumentName = () => {
        switch (newEntryKind) {
            case "company":
                return newEntryCompanyName.replaceAll(" ", "_");
            case "contractor":
                dispatch(checkNewEntryContractorValidation())
                return newEntryContractorName.replace(/\s/g, "_");
            case "position":
                dispatch(checkNewEntryPositionValidation())
                return newEntryPositionName.replace(/\s/g, "_");
            case "venue":
                dispatch(checkNewEntryVenueValidation())
                return newEntryVenueName.replace(/\s/g, "_");
            default:
                return null;
        }
    };
      
    const saveNewEntryToCollection = async (collection, documentName, data) => {
        await setDoc(doc(db, collection, documentName), data);
    };
      
    const saveNewEntry = async () => {
        try {
            const entryExists = async (collection, documentName) => {
                const documentSnapshot = await getDoc(doc(db, collection, documentName));
                return documentSnapshot.exists();
            };
      
            const documentName = getDocumentName();
            const collection = newEntryKind;
      
            if (await entryExists(collection, documentName)) {
            alert("Entry already exists: ");
            return;
            }
        
            switch (collection) {
            case "company":
                dispatch(checkNewEntryCompanyValidation())
                if (!newEntryCompanyIsValid) {
                    alert("Please fill out all the company fields");
                    return;
                } else {
                    await saveNewEntryToCollection(collection, documentName, newEntryCompany);
                    alert("Company added")
                }
                break;
            case "contractor":
                if (!newEntryContractorIsValid) {
                    alert("Please fill out all fields");
                    return;
                } else {
                    await saveNewEntryToCollection(collection, documentName, newEntryContractor);
                    alert("Contractor added")
                }
                break;
            case "position":
                if (!newEntryPositionIsValid) {
                    alert("Please fill out all fields");
                    return;
                } else {
                    await saveNewEntryToCollection(collection, documentName, newEntryPosition);
                    alert("Position added")
                }
            case "venue":
                if (!newEntryVenueIsValid) {
                    alert("Please fill out all fields");
                    return;
                } else {
                    await saveNewEntryToCollection(collection, documentName, newEntryVenue);
                    alert("Venue added")
                }
                break;
            default:
                break;
            }
        
            dispatch(setIsNewItemPortalOpen(false));
            dispatch(setDidUpload(true));
        } catch (error) {
            alert("Error adding entry")
            console.error("This is a popUpFooter error: ", error);
            dispatch(setIsNewItemPortalOpen(false));
            dispatch(clearNewEntryPortalDocument({}));
            dispatch(setDidUpload(false));
        }
      };

      const resetEntryActions = {
        company: resetNewEntryCompany,
        contractor: resetNewEntryContractor,
        position: resetNewEntryPosition,
        venue: resetNewEntryVenue,
      };
      
      const closeNewEntry = () => {
        dispatch(setIsNewItemPortalOpen(false));
        dispatch(clearNewEntryPortalDocument({}));
        if (resetEntryActions[newEntryKind]) {
            dispatch(resetEntryActions[newEntryKind]({}));
        }
        dispatch(setNewEntryKind(""));
      };

    return (
        <section className={styles.popUpFooter} >
            <p className={`${styles.button} ${styles.cancel}`} onClick={closeNewEntry} >Cancel</p>
            <p className={`${styles.button} ${styles.add}`} onClick={saveNewEntry} >Add</p>
        </section>
    );
};

export default PopUpFooter;