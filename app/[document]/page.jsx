import styles from './Documents.module.css';

import Title from "../(components)/(Title)/Title";
import ViewPanel from "../(components)/(ViewPanel)/ViewPanel";
import FileDisplay from "../(components)/(FileDisplay)/FileDisplay";

const Document = ({ params }) => {

    const { document } = params;

    return (
        <main className={styles.documents} >
            {/* Action Side */}
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <FileDisplay kind={document} ></FileDisplay>
            </ViewPanel>
            <ViewPanel secondary >
            </ViewPanel>
        </main>
    );
};

export default Document;