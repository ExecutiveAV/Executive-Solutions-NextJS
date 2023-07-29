'use client'

import { } from '../../types/types';

import { useState } from 'react';

import styles from './CreatorPanel.module.css';

import { useSelector } from 'react-redux';

import { setCurrentPhase } from '../../redux/slices/scheduleSlice';

import NewEntryPortal from '../(Portals)/(newEntryPortal)/NewEntryPortal';

//import cuurentPahse selector from scheduleSelectors.ts, newEntryPortal selector from newEntrySelectors.ts and isNewEntryPortalOpen selector from newEntrySelectors.ts line by line
import { currentPhaseSelector } from '../../redux/selectors/scheduleSelectors';
import { newEntryPortalTypeSelector } from '../../redux/selectors/portalSelectors';
import { isNewItemPortalOpenSelector } from '../../redux/selectors/portalSelectors';


//Phases of the creator panel
import SetUp from './(Phase)/(Setup)/Setup';
import Days from './(Phase)/(Days)/days';
import Contractor from './(Phase)/(Contractor)/Contractor';
import Shifts from './(Phase)/(Shifts)/Shifts';

const NewDocument = ({ children, kind }:{children ? : any, kind: string}) => {

    const isNewEntryPortalOpen = useSelector(isNewItemPortalOpenSelector);
    const newEntryPortalType = useSelector(newEntryPortalTypeSelector);
    const currentPhase = useSelector(currentPhaseSelector);

    const schedulePanel = () => (
        <>
            {
                currentPhase === 0 ? <SetUp  /> :
                currentPhase === 1 ? <Days/> :
                currentPhase === 2 ? <Shifts /> :
                currentPhase === 3 ? <Contractor  /> :
                ""
            }
            {
                isNewEntryPortalOpen && newEntryPortalType !== "undefined" ?
                    <NewEntryPortal /> :
                ""
            }
        </>
    );

    const invoicePanel = () => (
        <>
        </>
    );

    const panel = () => {
        switch(kind) {
            case "schedule":
                return schedulePanel();
                break;
            case "invoices":
                return invoicePanel();
                break;
            default:
                return schedulePanel();
                break;
        }
    };

    return (
        <section className={styles.creatorPanel} >
            {panel()}
        </section>
    );
};

export default NewDocument;