import styles from './Invoice.module.css';

import Title from "../(components)/(Title)/Title";
import ViewPanel from "../(components)/(ViewPanel)/ViewPanel";
import RenderingPanel from "../(components)/(RenderingPanel)/RenderingPanel";
import FileDisplay from "../(components)/(FileDisplay)/FileDisplay";

const Invoices = () => {
    return (
        <main className={styles.invoices} >
            {/* Action Side */}
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <FileDisplay kind="invoices" ></FileDisplay>
            </ViewPanel>
            <ViewPanel secondary >
            </ViewPanel>
        </main>
    );
};

export default Invoices;