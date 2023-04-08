'use client'

import { useSelector, useDispatch } from 'react-redux';

import { contractorsSelector, contractorTimeInSelector, contractorTimeOutSelector, halfDaySelector, walkawaySelector, currentShiftSelector, currentDaySelector, shiftSelector } from '../../../../redux/store/selectors/scheduleSelectors';

import { setContractors, setShiftHalfDay, setShiftWalkaway, setCurrentPhase, setShiftStartTime, setShiftEndTime, setCurrentShift, setCurrentContractor } from '../../../../redux/slices/scheduleSlice';

import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import TimeInput from "../(CreatorInputs)/(timeInput)/timeInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Shifts = ({ currentPhase }) => {

    const dispatch = useDispatch();

    const currentShift = useSelector(currentShiftSelector);
    const currentDay = useSelector(currentDaySelector);
    const shift = useSelector(shiftSelector);
    const contractors = useSelector(contractorsSelector);
    const timeIn = useSelector(contractorTimeInSelector);
    const timeOut = useSelector(contractorTimeOutSelector);
    const halfDay = useSelector(halfDaySelector);
    const walkaway = useSelector(walkawaySelector);

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
            <NumberInput value={contractors.length > 0 ? contractors.length : null} label={`How many contractors for shift ${currentShift + 1}?`} dispatched={value => dispatch(setContractors(value))} />
            <TimeInput value={timeIn ? timeIn : null} label={`What time does this shift start?`} dispatched={value => dispatch(setShiftStartTime(value))} />
            <TimeInput value={timeOut ? timeOut  : null} label={`What time does this shift end?`} dispatched={value => dispatch(setShiftEndTime(value))} />
            <ToggleInput value={halfDay ? walkaway : null} label={`Is this shift a half day?`} dispatched={value => dispatch(setShiftHalfDay(value))} />
            <ToggleInput value={walkaway ? walkaway : null} label={`Does this shift have a walkaway?`} dispatched={value => dispatch(setShiftWalkaway(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstShiftFromCurrentDay()} >Back</NavButton>
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase + 1))} >Next</NavButton>
            </section>
        </>
        
    );
};
export default Shifts;