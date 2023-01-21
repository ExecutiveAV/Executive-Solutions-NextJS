'use client'

import styles from './PrimaryText.module.css';

const PrimaryText = ({children, primary=true, onClick, style}) => {
    console.log(styles[styles.primaryText]);
    return (
        <p style={style} onClick={async e => await onClick(children)} className={`${primary ? styles.primaryText : styles.secondaryText}`} >
            {children}
        </p>
    );
};

export default PrimaryText;