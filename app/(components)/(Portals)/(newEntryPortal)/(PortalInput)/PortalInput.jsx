'use client'

import styles from './PortalInput.module.css'

const PortalInput = ({ children, updater }) => {
    return (
        <section className={styles.portalInput} >
            <p className={styles.title} >{children}</p>
            <input className={styles.input} type="text" onChange={e => updater(e.currentTarget.value)} />
        </section>
    )
};

export default PortalInput;