'use client'

import styles from './PrimaryText.module.css';

const PrimaryText = ({children, primary=true, bold, onClick, style}) => {
    return (
        <p style={style} onClick={async e => await onClick(children)} className={`${primary ? styles.primaryText : styles.secondaryText} ${bold ? styles.bold : ""}`} >
            {children}
        </p>
    );
};

export default PrimaryText;