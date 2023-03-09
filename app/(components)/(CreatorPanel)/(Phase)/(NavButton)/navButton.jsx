'use client'
import styles from './NavButton.module.css';

const NavButton = ( { children, action } ) => {
    return (
        <button onClick={() => action()} className={styles.navButton} >
            <p className={styles.content} >{children}</p>
        </button>
    );
};

export default NavButton;