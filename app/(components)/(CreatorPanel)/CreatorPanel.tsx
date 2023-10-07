'use client'

import { } from '../../types/types';

import styles from './CreatorPanel.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import NewEntryPortal from '../(Portals)/(newEntryPortal)/NewEntryPortal';

//import curentPahse selector from scheduleSelectors.ts, newEntryPortal selector from newEntrySelectors.ts and isNewEntryPortalOpen selector from newEntrySelectors.ts line by line
import { scheduleCurrentSelector } from '../../redux/selectors/scheduleSelectors';
import { invoiceCurrentSelector } from '../../redux/selectors/invoiceSelectors';
import { newEntryPortalTypeSelector } from '../../redux/selectors/portalSelectors';
import { isNewItemPortalOpenSelector } from '../../redux/selectors/portalSelectors';

//import setInvoiceCurrentPhase and setScheduleCurrentPhase from invoiceSlice.ts and scheduleSlice.ts
import { setInvoiceCurrentPhase, setInvoiceCurrentDay, setInvoiceCurrentContractor } from '../../redux/slices/invoiceSlice';
import { setScheduleCurrentPhase, setScheduleCurrentContractor, setScheduleCurrentShift, setScheduleCurrentDay } from '../../redux/slices/scheduleSlice';


//Phases of the creator panel
import SetUp from './(Phase)/(Schedule)/(Setup)/Setup';
import Days from './(Phase)/(Schedule)/(Days)/days';
import Contractor from './(Phase)/(Schedule)/(Contractor)/Contractor';
import Shifts from './(Phase)/(Schedule)/(Shifts)/Shifts';
import InvoiceHeader from './(Phase)/(Invoices)/(InvoiceHeader)/InvoiceHeader';
import PayTo from './(Phase)/(Invoices)/(PayTo)/PayTo';
import BillTo from './(Phase)/(Invoices)/(BillTo)/BillTo';
import Body from './(Phase)/(Invoices)/(Body)/Body';
import ContractorDay from './(Phase)/(Invoices)/(ContractorDays)/ContractorDay';
import NavigationButtons from './(Phase)/(NavigationButtons)/NavigationButtons';
import { current } from '@reduxjs/toolkit';


const NewDocument = ({ children, kind }:{children ? : any, kind: string}) => {

    const router = useRouter();

    const isNewEntryPortalOpen = useSelector(isNewItemPortalOpenSelector);
    const newEntryPortalType = useSelector(newEntryPortalTypeSelector);
    const scheduleCurrent = useSelector(scheduleCurrentSelector);
    const invoiceCurrent = useSelector(invoiceCurrentSelector);

    const scheduleCurrentPhase = scheduleCurrent.phase;
    const invoiceCurrentPhase = invoiceCurrent.phase;

    const dispatch = useDispatch();

    const schedulePanel = () => (
        <>
            {
                scheduleCurrentPhase === 0 ? <SetUp  /> :
                scheduleCurrentPhase === 1 ? <Days/> :
                scheduleCurrentPhase === 2 ? <Shifts /> :
                scheduleCurrentPhase === 3 ? <Contractor  /> :
                ""
            }
        </>
    );

    const invoicePanel = () => (
        <>
            {
                invoiceCurrentPhase === 0 ? <InvoiceHeader /> :
                invoiceCurrentPhase === 1 ? <PayTo /> :
                invoiceCurrentPhase === 2 ? <BillTo /> :
                invoiceCurrentPhase === 3 ? <Body /> :
                invoiceCurrentPhase === 4 ? <Contractor /> :
                invoiceCurrentPhase === 5 ? <ContractorDay /> :
                ""
            }
        </>
    );

    const questions = () => {
        switch(kind) {
            case "schedule":
                return schedulePanel();
                break;
            case "invoices":
                return invoicePanel();
                break;
            default:
                return <></>;
                break;
        }
    };
    
    const navigateWithin = (day, shift, contractor, phase, totalDays, totalShifts, totalContractors, kind, direction) => {
        if (kind === 'schedule') {
        if (direction === 'forward') {
            if (phase === 0) {
            dispatch(setScheduleCurrentPhase(1));
            } else {
            if (contractor < totalContractors - 1) {
                dispatch(setScheduleCurrentContractor(contractor + 1));
            } else if (shift < totalShifts - 1) {
                dispatch(setScheduleCurrentShift(shift + 1));
            } else if (day < totalDays - 1) {
                dispatch(setScheduleCurrentDay(day + 1));
            }
            }
        } else { // direction === 'backward'
            if (contractor > 0) {
            dispatch(setScheduleCurrentContractor(contractor - 1));
            } else if (shift > 0) {
            dispatch(setScheduleCurrentShift(shift - 1));
            } else if (day > 0) {
            dispatch(setScheduleCurrentDay(day - 1));
            } else if (phase > 0) {
            dispatch(setScheduleCurrentPhase(phase - 1));
            }
        }
        } else { // kind === 'invoices'
        if (direction === 'forward') {
            if (phase < 3) {
            dispatch(setInvoiceCurrentPhase(phase + 1));
            } else {
            if (day < totalDays - 1) {
                dispatch(setInvoiceCurrentDay(day + 1));
            } else if (contractor < totalContractors - 1) {
                dispatch(setInvoiceCurrentContractor(contractor + 1));
            }
            }
        } else { // direction === 'backward'
            if (day > 0) {
            dispatch(setInvoiceCurrentDay(day - 1));
            } else if (contractor > 0) {
            dispatch(setInvoiceCurrentContractor(contractor - 1));
            } else if (phase > 0) {
            dispatch(setInvoiceCurrentPhase(phase - 1));
            }
        }
        }
    };

    const navigate = (current, data, kind, direction) => {
        const { day, shift, contractor, phase } = current;
      
        let totalDays, totalShifts, totalContractors;
      
        if (kind === 'schedule') {
          totalDays = data.days.length;
          totalShifts = data.days[day]?.shifts.length;
          totalContractors = data.days[day]?.shifts[shift]?.contractors.length;
        } else {
          totalContractors = data.invoiceBody.invoiceBodyContractors.length;
          totalDays = data.invoiceBody.invoiceBodyContractors[contractor]?.contractorDays.length;
        }
      
        // Check for beginning and end
        if (direction === 'backward' && (phase === 0 || (kind === 'schedule' && phase === 1 && day === 0 && shift === 0 && contractor === 0) || (kind === 'invoices' && phase === 1 && contractor === 0 && day === 0))) {
          router.back();
          return;
        }
      
        if (direction === 'forward' && ((kind === 'schedule' && day >= totalDays - 1 && phase === 1) || (kind === 'invoices' && contractor >= totalContractors - 1 && phase === 5))) {
          alert("Done");
          return;
        }
      
        // Forward and backward navigation logic
        navigateWithin(day, shift, contractor, phase, totalDays, totalShifts, totalContractors, kind, direction);
      };
    
    return (
        <section className={styles.creatorPanel} >
            {questions()}
            <NavigationButtons forwardFunction={() => null} backwardsFunction={() => null} />
            {
                isNewEntryPortalOpen && newEntryPortalType !== "undefined" ?
                    <NewEntryPortal /> :
                ""
            }
        </section>
    );
};

export default NewDocument;