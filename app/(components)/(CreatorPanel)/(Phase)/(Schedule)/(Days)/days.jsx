'use client'

import { useSelector, useDispatch } from 'react-redux';
import { dateSelector, shiftsSelector, daysSelector, scheduleCurrentDaySelector, scheduleCurrentPhaseSelector } from '../../../../../redux/selectors/scheduleSelectors';

import { setScheduleCurrentPhase, setShifts, setDayDate, setScheduleCurrentDay, setScheduleCurrentShift, setScheduleCurrentContractor } from '../../../../../redux/slices/scheduleSlice';

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput";
import NavButton from "../../(NavButton)/navButton";

import styles from '../../(CreatorInputs)/Inputs.module.css';

const Days = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(scheduleCurrentDaySelector);
    const Days = useSelector(daysSelector);
    const currentPhase = useSelector(scheduleCurrentPhaseSelector);

    const date = useSelector(dateSelector);
    const shifts = useSelector(shiftsSelector);

    const checkIfFirstDay = () => {
        if (currentPhase === 1 && currentDay === 0) {
            dispatch(setScheduleCurrentPhase(currentPhase - 1));
        } else if (currentPhase === 1 && currentDay > 0) {
            dispatch(setScheduleCurrentPhase(3));
            dispatch(setScheduleCurrentDay(currentDay - 1));
            dispatch(setScheduleCurrentShift(Days[currentDay - 1].shifts.length - 1));
            dispatch(setScheduleCurrentContractor(Days[currentDay - 1].shifts[Days[currentDay - 1].shifts.length - 1].contractors.length - 1));
        }
    };

    const fomartDate = (dateString) => {
        const parts = dateString.split("/");
        return `${parts[2]}-${parts[0]}-${parts[1]}`;
      }
      

    return (
       <>   
            <DateInput value={date ? fomartDate(date) : null}  label={`What date is it for Day ${currentDay + 1}`} dispatched={value => dispatch(setDayDate(value))} />
            <NumberInput value={shifts.length > 0 ? shifts.length : null} label={`How many shifts?`} dispatched={(value) => dispatch(setShifts(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstDay()} >Back</NavButton>
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase + 1))} >Next</NavButton>
            </section>
       </>

    );
};

export default Days;