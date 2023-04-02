'use client'

import { useSelector, useDispatch } from 'react-redux';

import { setContractors, setShiftHalfDay, setShiftWalkaway, setCurrentPhase, setShiftStartTime, setShiftEndTime, setCurrentShift, setCurrentContractor } from '../../../../redux/slices/scheduleSlice';

import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import TimeInput from "../(CreatorInputs)/(timeInput)/timeInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Shifts = ({ currentPhase }) => {

    const dispatch = useDispatch();

    const currentShift = useSelector(state => state.schedule.current.shift);
    const currentDay = useSelector(state => state.schedule.current.day);
    const shift = useSelector(state => state.schedule.scheduleData.days[state.schedule.current.day].shifts[currentShift]);

    const checkIfFirstShiftFromCurrentDay = () => {
        if (currentPhase === 2 && currentShift === 0) {
            dispatch(setCurrentPhase(currentPhase - 1));
        } else if (currentPhase === 2 && currentShift > 0) {
            dispatch(setCurrentShift(currentShift - 1));
            dispatch(setCurrentPhase(currentPhase + 1));
            dispatch(setCurrentContractor(shift.contractors.length - 1));
        };
    };

    return (
        <>  
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <NumberInput label={`How many contractors for shift ${currentShift + 1}?`} dispatched={value => dispatch(setContractors(value))} />
            <TimeInput label={`What time does this shift start?`} dispatched={value => dispatch(setShiftStartTime(value))} />
            <TimeInput label={`What time does this shift end?`} dispatched={value => dispatch(setShiftEndTime(value))} />
            <ToggleInput label={`Is this shift a half day?`} dispatched={value => dispatch(setShiftHalfDay(value))} />
            <ToggleInput label={`Does this shift have a walkaway?`} dispatched={value => dispatch(setShiftWalkaway(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstShiftFromCurrentDay()} >Back</NavButton>
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase + 1))} >Next</NavButton>
            </section>
        </>
        
    );
};
export default Shifts;