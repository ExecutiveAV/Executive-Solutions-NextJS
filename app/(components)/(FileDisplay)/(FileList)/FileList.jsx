import PrimaryText from "./(PrimaryText)/PrimaryText";
import FileOptions from "./(FileOptions)/FileOptions";

import { db } from '../../../../utils/firebaseUtils/firebaseUtils';
import { getDocs, collection } from 'firebase/firestore'

import styles from './FileList.module.css';

import Link from "next/link";

// const handleClick = async (invNumber, kind) => {
//     try {
//         const file = await getDoc(doc(db, kind, invNumber));
//         if (kind === "invoices") {
//             dispatch(updateInvoice(file.data()));
//         } else if (kind === "schedules") {
//             dispatch(updateSchedule(file.data()));
//         }
//     } catch (e) {
//         console.error(e, invNumber, kind)
//     }
    
// }




const fetchFiles = async (kind) => {
    try {
        const files = await getDocs(collection(db, kind));
        const items = [];
        files.forEach(doc => {
            const fileData = doc.data();
            items.push(
                <section className={styles.file} >
                    <section  className={styles.withSubtitle} >
                        <PrimaryText >{`22${(new Date().getFullYear().toString()).slice(2, 4)}_${fileData.invNumber}`}</PrimaryText>
                        <PrimaryText primary={false} >{fileData.company}</PrimaryText>
                    </section>
                    <PrimaryText >
                        {
                        fileData.createdOn === null ?
                        "Date not found" :
                        `${new Date(fileData.createdOn).toLocaleDateString('en-us')}`
                        }</PrimaryText>
                    <section className='fileList__files__file__withSubtitle' >
                        <Link href={`/${kind}/new`} >{
                            fileData.editedOn === null ?
                            "Date not found" :
                            `${new Date(fileData.editedOn).toLocaleDateString('en-us')}`
                        }</Link>
                        {/* <PrimaryText primary={false} >{file.scheduleDocument.editedOn}</PrimaryText> */}
                    </section>
                    <FileOptions />
                </section>
            );

        });
        return items;
    } catch (e) {
        console.error("error: ", e);
    };
};

const FileList = async ({ kind }) => {

    const files = await fetchFiles(kind);

    return (
        <section className={styles.fileList} >
            <header className={styles.header} >
                <PrimaryText style={{textTransform: "capitalize"}} >{kind}:</PrimaryText>
                <PrimaryText >Created On:</PrimaryText>
                <PrimaryText >Edited On:</PrimaryText>
            </header>
            <article className={styles.files} >
                {files}
            </article>
            
        </section>
    );
};

export default FileList;