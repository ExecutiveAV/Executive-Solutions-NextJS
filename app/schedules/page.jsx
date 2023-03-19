import styles from './Schedules.module.css';

import Title from "../(components)/(Title)/Title";
import ViewPanel from "../(components)/(ViewPanel)/ViewPanel";
import FileDisplay from "../(components)/(FileDisplay)/FileDisplay";

const Schedules = () => {
    return (
        <main className={styles.schedules} >
            {/* Action Side */}
            <ViewPanel >
                <Title pathTo={"/"} >Executive AV</Title>
                <FileDisplay kind="schedules" ></FileDisplay>
            </ViewPanel>
            <ViewPanel secondary >

            </ViewPanel>
        </main>
    );
};

export default Schedules;