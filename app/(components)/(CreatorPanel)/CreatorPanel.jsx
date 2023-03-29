'use client'

import { useState } from 'react';

import styles from './CreatorPanel.module.css';

//Phases of the creator panel
import SetUp from './(Phase)/(Setup)/Setup';
import Days from './(Phase)/(Days)/days';
import Contractor from './(Phase)/(Contractor)/Contractor';
import Shifts from './(Phase)/(Shifts)/Shifts';

const NewDocument = ({ children }) => {

    const [phase, setPhase] = useState(0);

    return (
        <section className={styles.creatorPanel} >
            {
                phase === 0 ? <SetUp action={setPhase} currentPhase={phase} /> :
                phase === 1 ? <Days action={setPhase} currentPhase={phase} /> :
                phase === 2 ? <Shifts action={setPhase} currentPhase={phase} /> :
                phase === 3 ? <Contractor action={setPhase} currentPhase={phase} /> :
                ""
            }
        </section>
    );
};

export default NewDocument;