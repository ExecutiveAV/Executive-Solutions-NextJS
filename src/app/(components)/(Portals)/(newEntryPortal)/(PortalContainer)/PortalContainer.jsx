'use client'

import styles from './PortalContainer.module.css';

const PortalContainer = ({ children }) => {
    return (
        <section className={styles.portalContainer} >
            <section className={styles.container} >
                {
                    children
                }
            </section>
        </section>
    );
};

export default PortalContainer;