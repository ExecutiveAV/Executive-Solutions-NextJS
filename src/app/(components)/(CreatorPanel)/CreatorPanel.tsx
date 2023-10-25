'use client'

import { } from '../../types/types';

import styles from './CreatorPanel.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import NewEntryPortal from '../(Portals)/(newEntryPortal)/NewEntryPortal';

//import curentPahse selector from scheduleSelectors.ts, newEntryPortal selector from newEntrySelectors.ts and isNewEntryPortalOpen selector from newEntrySelectors.ts line by line
import { scheduleCurrentSelector, scheduleDataSelector } from '../../redux/selectors/scheduleSelectors';
import { invoiceCurrentSelector, invoiceDataSelector } from '../../redux/selectors/invoiceSelectors';
import { newEntryPortalTypeSelector } from '../../redux/selectors/portalSelectors';
import { isNewItemPortalOpenSelector } from '../../redux/selectors/portalSelectors';

//import setInvoiceCurrentPhase and setScheduleCurrentPhase from invoiceSlice.ts and scheduleSlice.ts
import { setInvoiceCurrentPhase, setInvoiceCurrentDay, setInvoiceCurrentContractor } from '../../redux/slices/invoiceSlice';
import { setScheduleCurrentPhase, setScheduleCurrentContractor, setScheduleCurrentShift, setScheduleCurrentDay } from '../../redux/slices/scheduleSlice';

//Phases of the creator panel
import SetUp from './(Phase)/(Schedule)/(Setup)/Setup';
import Days from './(Phase)/(Schedule)/(Days)/days';
import Contractor from './(Phase)/(Schedule)/(Contractor)/Contractor';
import InvoiceContractor from './(Phase)/(Invoices)/(InvoiceContractor)/InvoiceContractor';
import Shifts from './(Phase)/(Schedule)/(Shifts)/Shifts';
import InvoiceHeader from './(Phase)/(Invoices)/(InvoiceHeader)/InvoiceHeader';
import PayTo from './(Phase)/(Invoices)/(PayTo)/PayTo';
import BillTo from './(Phase)/(Invoices)/(BillTo)/BillTo';
import Body from './(Phase)/(Invoices)/(Body)/Body';
import ContractorDay from './(Phase)/(Invoices)/(ContractorDays)/ContractorDay';
import NavigationButtons from './(Phase)/(NavigationButtons)/NavigationButtons';


const NewDocument = ({ children, kind }:{children ? : any, kind: string}) => {

    const router = useRouter();

    const isNewEntryPortalOpen = useSelector(isNewItemPortalOpenSelector);
    const newEntryPortalType = useSelector(newEntryPortalTypeSelector);
    const scheduleCurrent = useSelector(scheduleCurrentSelector);
    const invoiceCurrent = useSelector(invoiceCurrentSelector);
    const scheduleData = useSelector(scheduleDataSelector);
    const invoiceData = useSelector(invoiceDataSelector);

    console.log("scheduleCurrent", scheduleCurrent);
    console.log("invoiceCurrent", invoiceCurrent);

    const scheduleCurrentPhase = scheduleCurrent.phase;
    const invoiceCurrentPhase = invoiceCurrent.phase;

    const dispatch = useDispatch();

    console.log("scheduleCurrentPhase", scheduleCurrentPhase);
    console.log("invoiceCurrentPhase", invoiceCurrentPhase);

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
                invoiceCurrentPhase === 4 ? <InvoiceContractor /> :
                invoiceCurrentPhase === 5 ? <ContractorDay /> :
                ""
            }
        </>
    );

    const questions = () => {
        console.log("kind", kind);
        switch(kind) {
            case "schedules":
                console.log("schedulePanel");
                return schedulePanel();
                break;
            case "invoices":
                console.log("invoicePanel");
                return invoicePanel();
                break;
            default:
                return <></>;
                break;
        }
    };
    
    const navigateWithin = (day, shift, contractor, phase, totalDays, totalShifts, totalContractors, kind, direction) => {
        if (kind === 'schedules') {
            if (direction === 'forward') {
                if (phase === 0) {
                dispatch(setScheduleCurrentPhase(1));
                } else {
                    if (phase === 1 && day < totalDays - 1) {
                        dispatch(setScheduleCurrentPhase(phase + 1));
                    } else if (phase === 1 && day === totalDays - 1) {
                        dispatch(setScheduleCurrentPhase(phase + 1));
                    } else if (phase === 2) {
                        dispatch(setScheduleCurrentPhase(phase + 1))
                    } else if (phase === 3 && contractor < totalContractors - 1) {
                        dispatch(setScheduleCurrentContractor(contractor + 1));
                    } else if (phase === 3 && contractor === totalContractors - 1 && shift < totalShifts - 1) {
                        dispatch(setScheduleCurrentPhase(phase - 1));
                        dispatch(setScheduleCurrentShift(shift + 1));
                        dispatch(setScheduleCurrentContractor(0));
                    } else if (phase === 3 && contractor === totalContractors - 1 && shift === totalShifts - 1 && day < totalDays - 1) {
                        dispatch(setScheduleCurrentPhase(phase - 2));
                        dispatch(setScheduleCurrentDay(day + 1));
                        dispatch(setScheduleCurrentShift(0));
                        dispatch(setScheduleCurrentContractor(0));
                    } else if (phase === 3 && contractor === totalContractors - 1 && shift === totalShifts - 1 && day === totalDays - 1) {
                        alert("Done");
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
            if (phase < 4) {
            dispatch(setInvoiceCurrentPhase(phase + 1));
            } else {
                if (day < totalDays - 1) {
                    dispatch(setInvoiceCurrentDay(day + 1));
                } else if (contractor < totalContractors - 1 && phase < 5) {
                    dispatch(setInvoiceCurrentPhase(phase + 1));
                } else if (contractor < totalContractors - 1 && phase === 5) {
                    dispatch(setInvoiceCurrentContractor(contractor + 1));
                    dispatch(setInvoiceCurrentPhase(4));
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

    const navigate = ( { data, current, kind, direction} : {
        data: any,
        current: any,
        kind: string,
        direction: string
    } ) => {
        let day, shift, contractor, phase, documentData;

        if (kind === 'schedules') {
            day = current.day;
            shift = current.shift;
            contractor = current.contractor;
            phase = current.phase;
            documentData = data;
            console.log(current, "current")
            
        } else {
            contractor = current.contractor;
            day = current.day;
            phase = current.phase;
            documentData = data;
        };``
      
        let totalDays, totalShifts, totalContractors;
      
        if (kind === 'schedules') {
          totalDays = documentData.days.length;
          totalShifts = documentData.days[day]?.shifts.length;
          totalContractors = documentData.days[day]?.shifts[shift]?.contractors.length;
        } else {
          totalContractors = documentData.invoiceBody.invoiceBodyContractors.length;
          totalDays = documentData.invoiceBody.invoiceBodyContractors[contractor]?.contractorDays.length;
        }
      
        // Check for beginning and end
        if (direction === 'backwards' && (phase === 0)) {
          router.back();
          return;
        }
      
        if (direction === 'forward' && ((kind === 'schedules'  && contractor >= totalContractors - 1 ) || (kind === 'invoices' && contractor >= totalContractors - 1 && phase === 5))) {
          alert("Done");
          return;
        }
      
        // Forward and backward navigation logic
        navigateWithin(day, shift, contractor, phase, totalDays, totalShifts, totalContractors, kind, direction);
    };

    let current;
    let data;

    if (kind === 'schedules') {
        current = scheduleCurrent;
        data = scheduleData;
    } else {
        current = invoiceCurrent;
        data = invoiceData;
    }

    return (
        <section className={styles.creatorPanel} >
            {questions()}
            <NavigationButtons forwardFunction={() => navigate({data, current, kind, direction:"forward"})} backwardsFunction={() => navigate({data, current, kind, direction: "backwards"})} />
            {
                isNewEntryPortalOpen && newEntryPortalType !== "undefined" ?
                    <NewEntryPortal /> :
                ""
            }
        </section>
    );
};

export default NewDocument;