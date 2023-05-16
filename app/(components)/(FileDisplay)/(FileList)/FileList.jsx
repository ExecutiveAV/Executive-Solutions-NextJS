import PrimaryText from "./(PrimaryText)/PrimaryText";
import { db } from '../../../../utils/firebaseUtils/firebaseUtils';
import { getDocs, collection } from 'firebase/firestore'

import styles from './FileList.module.css';

import Link from "next/link";
import File from "./(File)/File";

const fetchFilesFromDB = async (kind) => {
    try {
        const files = await getDocs(collection(db, kind));
        const items = [];
        files.forEach(doc => {
            const file = doc.data();
            items.push(
                <File key={doc.id} fileName={doc.id} createdOn={`${new Date(file.createdAt).toLocaleDateString('en-us')}`} editedOn={`${new Date(file.updatedAt).toLocaleDateString('en-us')}`} kind={kind} />
            );
        });
        return items;
    } catch (e) {
        console.error("error: ", e);
    };
};

const FileList = async ({ kind }) => {

    const files = await fetchFilesFromDB(kind);

    return (
        <section className={styles.fileList} >
            <header className={styles.header} >
                <PrimaryText bold style={{textTransform: "capitalize"}} >{kind}:</PrimaryText>
                <PrimaryText bold >Created On:</PrimaryText>
                <PrimaryText bold >Edited On:</PrimaryText>
            </header>
            <ul className={styles.files} >
                {files}
            </ul>
            
        </section>
    );
};

export default FileList;