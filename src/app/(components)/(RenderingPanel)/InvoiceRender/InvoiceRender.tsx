import styles from './InvoiceRender.module.css';

import Hero from './Hero/Hero';
import Body from './Body/Body';

const InvoiceRender = (props: any) => {
    return (
        <main className={styles.invoiceRender} >
            <Hero />
            <Body />
        </main>
    );
};

export default InvoiceRender;