import styles from './BodyTitle.module.css';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    display: 'swap',
    subsets: ['latin'],

})


const BodyTitle = () => {
    return (
        <section className={styles.bodyTitleContainer} >
            <p className={`${styles.day} ${styles.item}`} >Day</p>
            <p className={`${styles.date} ${styles.item}`} >Date</p>
            <section className={`${styles.all}`} >
                <p className={`${styles.qty} ${styles.item}`} >Qty</p>
                <p className={`${styles.position} ${styles.item}`} >Position</p>
                <p className={`${styles.tech} ${styles.item}`} >Tech</p>
                <p className={`${styles.time} ${styles.item}`} >Time</p>
                <p className={`${styles.hrs} ${styles.item}`} >Hrs</p>
            </section>
        </section>
    );
};

export default BodyTitle;