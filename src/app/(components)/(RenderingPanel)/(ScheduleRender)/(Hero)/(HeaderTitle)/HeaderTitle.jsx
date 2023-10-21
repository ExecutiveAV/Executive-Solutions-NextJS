'use client'
import styles from '../Hero.module.css';

const HeaderTitle = ( { client } ) => {
    return (
        <p className={styles.headerTitle} >
            {client}
        </p>
    );
};

export default HeaderTitle;