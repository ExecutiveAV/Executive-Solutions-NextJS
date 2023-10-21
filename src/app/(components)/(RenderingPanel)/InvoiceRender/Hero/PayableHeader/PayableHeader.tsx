import styles from "./PayableHeader.module.css";

type PayableHeaderProps = {
    type: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    email: string;
};

const PayableHeader = ({
    type,
    name,
    address,
    city,
    state,
    zip,
    email
}: PayableHeaderProps) => {

    return (
        <section className={styles.payableHeader} >
            <h2 className={`${styles.playableHeaderText} ${styles.title}`} >{type}</h2>
            <p className={styles.payableHeaderText} >{name}</p>
            <p className={styles.payableHeaderText} >{address}</p>
            <p className={styles.payableHeaderText} >{city !== "" ? `${city},` : ""} {state} {zip}</p>
            <p className={`${styles.payableHeaderText} ${styles.boldText}`} >{email}</p>
            
        </section>
    )
};

export default PayableHeader;