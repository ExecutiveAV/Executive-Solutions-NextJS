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
import SetUp from './(Phase)/(Schedule)/(Setup)/Setup';
import Days from './(Phase)/(Schedule)/(Days)/days';
import Contractor from './(Phase)/(Schedule)/(Contractor)/Contractor';
import Shifts from './(Phase)/(Schedule)/(Shifts)/Shifts';
import InvoiceHeader from './(Phase)/(Invoices)/InvoiceHeader/InvoiceHeader';

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
        </>
    );

    const invoicePanel = () => (
        <>
            {
                currentPhase === 0 ? <InvoiceHeader /> :
                ""
            }
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
            {
                isNewEntryPortalOpen && newEntryPortalType !== "undefined" ?
                    <NewEntryPortal /> :
                ""
            }
        </section>
    );
};

export default NewDocument;