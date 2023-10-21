'use client'
import BodyTitle from "./(BodyTitle)/BodyTitle";
import Days from "./(Days)/Days";
import styles from './Body.module.css';

import { useSelector } from "react-redux";
import { daysSelector } from "../../../../redux/selectors/scheduleSelectors";

/*,,*/

const Body = () => {

    const dayData = useSelector(daysSelector);

    return (
        <section className={styles.body} >
            <BodyTitle />
            <Days dayData={dayData} />
            <section className={styles.lastBumper} />
        </section>
    );
};

export default Body;