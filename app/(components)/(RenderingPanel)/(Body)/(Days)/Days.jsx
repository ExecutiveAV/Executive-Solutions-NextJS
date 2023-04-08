'use client'
import styles from './Days.module.css';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Day from './(Day)/Day';

const Days = ( ) => {

    const [ totalDays, setTotalDays ] = useState( [] );
    const Days = useSelector( state => state.schedule.scheduleData.days );

    useEffect( () => {
        setTotalDays( Days.map( ( day, index ) => {
            return <Day dayData={day} dayCounter={index} />
        } ) );
    }, [ Days ] );

    return (
        <section className={styles.days} >
            {
                totalDays
            }
        </section>
    );
};

export default Days;