'use client'

import { useSelector, useDispatch } from 'react-redux';
import { dateSelector, shiftsSelector, daysSelector, scheduleCurrentDaySelector } from '../../../../../redux/selectors/scheduleSelectors';

import { setScheduleShifts, setScheduleDayDate } from '../../../../../redux/slices/scheduleSlice';

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput";

const Days = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(scheduleCurrentDaySelector);
    const Days = useSelector(daysSelector);

    const date = useSelector(dateSelector);
    const shifts = useSelector(shiftsSelector);

    const fomartDate = (dateString) => {
        const parts = dateString.split("/");
        return `${parts[2]}-${parts[0]}-${parts[1]}`;
    }
      

    return (
       <>   
            <DateInput value={date ? fomartDate(date) : null}  label={`What date is it for Day ${currentDay + 1}`} dispatched={value => dispatch(setScheduleDayDate(value))} />
            <NumberInput value={shifts.length > 0 ? shifts.length : null} label={`How many shifts?`} dispatched={(value) => dispatch(setScheduleShifts(value))} />
       </>

    );
};

export default Days;