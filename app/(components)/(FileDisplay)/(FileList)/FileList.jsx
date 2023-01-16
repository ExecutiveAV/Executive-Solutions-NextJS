import PrimaryText from "./(PrimaryText)/PrimaryText";
import FileOptions from "./(FileOptions)/FileOptions";

import Link from "next/link";

const handleClick = async (invNumber, kind) => {
    try {
        const file = await getDoc(doc(db, kind, invNumber));
        if (kind === "invoices") {
            dispatch(updateInvoice(file.data()));
        } else if (kind === "schedules") {
            dispatch(updateSchedule(file.data()));
        }
    } catch (e) {
        console.error(e, invNumber, kind)
    }
    
}

// const temp = (<section className='fileList__files__file' >
// <section  className='fileList__files__file__withSubtitle' >
//     <PrimaryText onClick={async e => await handleClick(e, kind)} >{`22${(new Date().getFullYear().toString()).slice(2, 4)}_${file.invNumber}`}</PrimaryText>
//     <PrimaryText primary={false} >{file.company}</PrimaryText>
// </section>
// <PrimaryText >
//     {
//     file.createdOn === null ?
//     "Date not found" :
//     `${new Date(file.createdOn).toLocaleDateString('en-us')}`
//     }</PrimaryText>
// <section className='fileList__files__file__withSubtitle' >
//     <Link to={`/${kind}/new`} >{
//         file.editedOn === null ?
//         "Date not found" :
//         `${new Date(file.editedOn).toLocaleDateString('en-us')}`
//     }</Link>
//     {/* <PrimaryText primary={false} >{file.scheduleDocument.editedOn}</PrimaryText> */}
// </section>
// <FileOptions />
// </section>)

const FileList = ({ filesData, kind }) => {

    const files = filesData.map(file => {
        return (
            <></>
        );
    });

    return (
        <section className='fileList' >
            <header className='fileList__header' >
                <PrimaryText style={{textTransform: "capitalize"}} >{kind}:</PrimaryText>
                <PrimaryText >Created On:</PrimaryText>
                <PrimaryText >Edited On:</PrimaryText>
            </header>
            <article className='fileList__files' >
                {files}
            </article>
            
        </section>
    );
};

export default FileList;