import styles from './BodyTitle.module.css';


const BodyTitle = () => {
    return (
        <section className={styles.bodyTitleContainer} >
            <p className={`${styles.day}`} >Day</p>
            <p className={`${styles.date}`} >Date</p>
            <section className={`${styles.all}`} >
                <p className={`${styles.qty}`} >Qty</p>
                <p className={`${styles.position}`} >Position</p>
                <p className={`${styles.tech}`} >Tech</p>
                <p className={`${styles.time}`} >Time</p>
                <p className={`${styles.hrs}`} >Hrs</p>
            </section>
        </section>
    );
};

export default BodyTitle;