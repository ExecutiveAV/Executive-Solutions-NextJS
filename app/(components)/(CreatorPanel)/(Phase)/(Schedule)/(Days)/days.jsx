'use client'

import { useSelector, useDispatch } from 'react-redux';
import { dateSelector, shiftsSelector, daysSelector, currentDaySelector, currentPhaseSelector } from '../../../../../redux/selectors/scheduleSelectors';

import { setCurrentPhase, setShifts, setDayDate, setCurrentDay, setCurrentShift, setCurrentContractor } from '../../../../../redux/slices/scheduleSlice';

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput";
import NavButton from "../../(NavButton)/navButton";

import styles from '../../(CreatorInputs)/Inputs.module.css';

const Days = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(currentDaySelector);
    const Days = useSelector(daysSelector);
    const currentPhase = useSelector(currentPhaseSelector);

    const date = useSelector(dateSelector);
    const shifts = useSelector(shiftsSelector);

    const checkIfFirstDay = () => {
        if (currentPhase === 1 && currentDay === 0) {
            dispatch(setCurrentPhase(currentPhase - 1));
        } else if (currentPhase === 1 && currentDay > 0) {
            dispatch(setCurrentPhase(3));
            dispatch(setCurrentDay(currentDay - 1));
            dispatch(setCurrentShift(Days[currentDay - 1].shifts.length - 1));
            dispatch(setCurrentContractor(Days[currentDay - 1].shifts[Days[currentDay - 1].shifts.length - 1].contractors.length - 1));
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