'use client'

import { useState } from 'react';

import styles from './CreatorPanel.module.css';

import { useSelector } from 'react-redux';

import { setCurrentPhase } from '../../redux/slices/scheduleSlice';

import NewEntryPortal from '../(Portals)/(newEntryPortal)/NewEntryPortal';

//Phases of the creator panel
import SetUp from './(Phase)/(Setup)/Setup';
import Days from './(Phase)/(Days)/days';
import Contractor from './(Phase)/(Contractor)/Contractor';
import Shifts from './(Phase)/(Shifts)/Shifts';

const NewDocument = ({ children }) => {

    const isNewEntryPortalOpen = useSelector(state => state.newEntryPortal.isNewItemPortalOpen);
    const newEntryPortalType = useSelector(state => state.newEntryPortal.newEntryPortalType);
    const currentPhase = useSelector(state => state.schedule.current.phase);

    return (
        <section className={styles.creatorPanel} >
            {
                currentPhase === 0 ? <SetUp action={setCurrentPhase} currentPhase={currentPhase} /> :
                currentPhase === 1 ? <Days action={setCurrentPhase} currentPhase={currentPhase} /> :
                currentPhase === 2 ? <Shifts currentPhase={currentPhase} /> :
                currentPhase === 3 ? <Contractor action={setCurrentPhase} currentPhase={currentPhase} /> :
                ""
            }
            {
                isNewEntryPortalOpen && newEntryPortalType !== "undefined" ?
                    <NewEntryPortal newEntryPortalType={newEntryPortalType} /> :
                ""
            }
        </section>
    );
};

export default NewDocument;