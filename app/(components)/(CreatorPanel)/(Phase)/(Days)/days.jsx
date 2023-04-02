'use client'

import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPhase, setShifts, setDayDate, setCurrentDay, setCurrentShift, setCurrentContractor } from '../../../../redux/slices/scheduleSlice';

import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../(CreatorInputs)/(dateInput)/dateInput";
import ToggleInput from '../(CreatorInputs)/(toggleInput)/toggleInput';
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Days = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(state => state.schedule.current.day);
    const Days = useSelector(state => state.schedule.scheduleData.days);
    const currentShift = useSelector(state => state.schedule.current.shift);
    const currentPhase = useSelector(state => state.schedule.current.phase);
    const currentContractor = useSelector(state => state.schedule.current.contractor);

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

    return (
       <>   
            <DateInput label={`What date is it for Day ${currentDay + 1}`} dispatched={value => dispatch(setDayDate(value))} />
            <NumberInput label={`How many shifts?`} dispatched={(value) => dispatch(setShifts(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstDay()} >Back</NavButton>
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase + 1))} >Next</NavButton>
            </section>
       </>

    );
};

export default Days;