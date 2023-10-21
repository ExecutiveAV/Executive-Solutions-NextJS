'use client'

import styles from './FileOptions.module.css';

import { db } from '../../../../../../../utils/firebaseUtils/firebaseUtils';
import { doc, deleteDoc } from 'firebase/firestore';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Dots from './dots';

const FileOptions = ({ id, route, fileName }) => {

    // const router = useRouter();
    const [isModalOpen, toggleModal] = useState(false);

    console.log("test: ",`/${route}/edit/${fileName}`)

    // const handleOptionsClick = async (route, fileName, operation) => {
    //     //Inside a try catch block, handle the click of the options button usin the operation parameter via a switch statement, the operation parameter will be either edit, delete, or view
    //     try {
    //         switch (operation) {
    //             case "edit":
    //                 //If the operation is edit, then redirect to the edit page
    //                 router.push(`/${route}/edit/${fileName}`);
    //                 break;
    //             case "delete":
    //                 //If the operation is delete, then delete the file from the database
    //                 const fileRef = doc(db, route, fileName);
    //                 await deleteDoc(fileRef);
    //                 break;
    //             case "view":
    //                 //If the operation is view, then redirect to the view page
    //                 router.push(`/${route}/view/${fileName}`);
    //                 break;
    //             default:
    //                 //If the operation is not edit, delete, or view, then throw an error
    //                 throw new Error("Invalid operation");
    //         };
    //     } catch (e) {
    //         console.error("error: ", e);
    //     };
        
    // };


    // const closeModal = () => {
    //     //Inside a try catch block, close the modal for the options button by changing the display property of the modal to none and the display property of the modalBackdrop to none via the modal and modalBackdrop variables respectively and remove the event listener from the modalBackdrop variable with an event type of click and a callback function that calls the closeModal function and remove the event listener from the modalCloseButton variable with an event type of click and a callback function that calls the closeModal function respectively
    //     try {
    //         const modal = document.getElementById("portal");
    //         const modalBackdrop = document.getElementById("modalBackdrop");
    //         modal.style.display = "none";
    //         modalBackdrop.style.display = "none";
    //         modalBackdrop.removeEventListener("click", closeModal);
    //         modalCloseButton.removeEventListener("click", closeModal);
    //     } catch (e) {
    //         console.error("error: ", e);
    //     }
    // };

    return (
        
        <div id={id} className={`${styles.options} ${isModalOpen ? "" : styles.hidden}`} onClick={e => toggleModal(!isModalOpen)} >
            <div className={`${styles.backDrop} ${isModalOpen ? "" : styles.hidden }`} onClick={e => toggleModal(!isModalOpen)} ></div>
            <Dots customClass={styles.dots} />
            <div className={styles.optionsContainer} >
                <p className={`${styles.option} ${styles.title}`} >Inv: {fileName}</p>
                <p className={styles.option} >Download</p>
                <p className={styles.option} >Rename</p>
                <p className={styles.option} >View</p>
                <Link href={`/${route}/edit/${fileName}`} className={styles.option} >Edit</Link>
                <p className={styles.option} >Edit History</p>
                <p className={styles.option} >Delete</p>
            </div>
        </div>
    );
};

export default FileOptions;