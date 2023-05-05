'use client'

import styles from './PortalInput.module.css'

const PortalInput = ({ children, updater, validated }) => {

    const handleChange = async (value, updater) => {
        if (value.length < 4) {
            await new Promise(r => setTimeout(r, 1000));
            updater(value)
        } else {
            updater(value)
        };
    };

    return (
        <section className={styles.portalInput} >
            <p className={styles.title} >{children}</p>
            <input className={`${styles.input} ${typeof validated !== "undefined" && validated === false ? styles.warning : ""}`} type="text" onChange={e => handleChange(e.currentTarget.value, updater)} />
        </section>
    )
};

export default PortalInput;