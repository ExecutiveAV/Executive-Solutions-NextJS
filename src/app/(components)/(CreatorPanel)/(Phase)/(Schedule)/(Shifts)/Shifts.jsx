'use client'

import { useSelector, useDispatch } from 'react-redux';

import { contractorsSelector, contractorTimeInSelector, contractorTimeOutSelector, halfDaySelector, walkawaySelector, scheduleCurrentShiftSelector, scheduleCurrentDaySelector, shiftSelector } from '../../../../../redux/selectors/scheduleSelectors';

import { setScheduleContractors, setScheduleShiftHalfDay, setScheduleShiftWalkaway, setScheduleShiftStartTime, setScheduleShiftEndTime } from '../../../../../redux/slices/scheduleSlice';

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput";
import TimeInput from "../../(CreatorInputs)/(timeInput)/timeInput";

import styles from '../../(CreatorInputs)/Inputs.module.css';

const Shifts = () => {

    const dispatch = useDispatch();

    const currentShift = useSelector(scheduleCurrentShiftSelector);
    const currentDay = useSelector(scheduleCurrentDaySelector);
    const shift = useSelector(shiftSelector);
    const contractors = useSelector(contractorsSelector);
    const timeIn = useSelector(contractorTimeInSelector);
    const timeOut = useSelector(contractorTimeOutSelector);
    const halfDay = useSelector(halfDaySelector);
    const walkaway = useSelector(walkawaySelector);

    return (
        <>  
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <NumberInput value={contractors.length > 0 ? contractors.length : null} label={`How many contractors for shift ${currentShift + 1}?`} dispatched={value => dispatch(setScheduleContractors(value))} />
            <TimeInput value={timeIn ? timeIn : null} label={`What time does this shift start?`} dispatched={value => dispatch(setScheduleShiftStartTime(value))} />
            <TimeInput value={timeOut ? timeOut  : null} label={`What time does this shift end?`} dispatched={value => dispatch(setScheduleShiftEndTime(value))} />
            <ToggleInput value={halfDay ? walkaway : null} label={`Is this shift a half day?`} dispatched={value => dispatch(setScheduleShiftHalfDay(value))} />
            <ToggleInput value={walkaway ? walkaway : null} label={`Does this shift have a walkaway?`} dispatched={value => dispatch(setScheduleShiftWalkaway(value))} />
        </>
        
    );
};
export default Shifts;