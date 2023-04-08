'use client'
import BodyTitle from "./(BodyTitle)/BodyTitle";
import Days from "./(Days)/Days";
import styles from './Body.module.css';

import { useSelector } from "react-redux";

/*,,*/

const Body = () => {

    const dayData = useSelector(state => state.schedule.scheduleData.days);

    return (
        <section className={styles.body} >
            <BodyTitle />
            <Days dayData={dayData} />
        </section>
    );
};

export default Body;