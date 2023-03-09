import styles from './File.module.css';


import PrimaryText from "../(PrimaryText)/PrimaryText";
import FileOptions from "./(FileOptions)/FileOptions";


const File = ({ key, fileName, createdOn, editedOn, kind }) => {
    return (
        <li className={styles.file} >
            <PrimaryText >{fileName}</PrimaryText>
            <PrimaryText >{createdOn}</PrimaryText>
            <PrimaryText >{editedOn}</PrimaryText>
            <FileOptions id={key} route={kind} fileName={fileName} />
        </li>
    );
};

export default File;