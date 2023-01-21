import styles from './FileDisplay.module.css';

import SearchBar from "./(SearchBar)/SearchBar";
import Button from "./(Button)/Button";
import FilterButton from "./(FilterButton)/FilterButton";
import FileList from "./(FileList)/FileList";

import Link from "next/link";

const FileDisplay = ({children, kind}) => {

    return (
        <article className={styles.fileDisplay} >
            <header className={styles.header} >
                <SearchBar />
                <Button className={styles.button} >
                    <Link href="/schedules/new" >New</Link>
                </Button>
                <FilterButton />
            </header>
            <FileList type={"Schedule #"} kind={kind}  />
        </article>
    );
};

export default FileDisplay;