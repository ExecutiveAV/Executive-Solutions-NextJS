'use client'

import { useState } from 'react';

import styles from './CreatorPanel.module.css';

//Phases of the creator panel
import SetUp from './(Phase)/(Setup)/Setup';
import Days from './(Phase)/(Days)/days';

const NewDocument = ({ children }) => {

    const [phase, setPhase] = useState(1);

    return (
        <section className={styles.creatorPanel} >
            {
                phase === 0 ? <SetUp action={setPhase} /> :
                    phase === 1 ? <Days  /> : ""
            }
        </section>
    );
};

export default NewDocument;