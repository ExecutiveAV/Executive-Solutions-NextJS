import SearchBar from "./(SearchBar)/SearchBar";
import Button from "./(Button)/Button";
import FilterButton from "./(FilterButton)/FilterButton";
import FileList from "./(FileList)/FileList";

import Link from "next/link";

const FileDisplay = ({children, kind}) => {

    const files = []

    return (
        <article className='filePanel' >
            <header className='filePanel__header' >
                <SearchBar />
                <Button customStyle="filePanel__header__button" >
                    <Link href="/schedules/new" >New</Link>
                </Button>
                <FilterButton />
            </header>
            <FileList type={"Schedule #"} filesData={files} kind={kind}  />
        </article>
    );
};

export default FileDisplay;