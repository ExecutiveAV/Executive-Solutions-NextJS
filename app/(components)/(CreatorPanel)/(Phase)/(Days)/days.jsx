'use client'

import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPhase, setShifts } from '../../../../redux/slices/scheduleSlice';

import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../(CreatorInputs)/(dateInput)/dateInput";
import ToggleInput from '../(CreatorInputs)/(toggleInput)/toggleInput';
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Days = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(state => state.schedule.current.day);
    const currentPhase = useSelector(state => state.schedule.current.phase);

    return (
       <>   
            <DateInput label={`What date is it for Day ${currentDay + 1}`} />
            <NumberInput label={`How many shifts?`} dispatched={(value) => dispatch(setShifts(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase - 1))} >Back</NavButton>
                <NavButton action={() => dispatch(setCurrentPhase(currentPhase + 1))} >Next</NavButton>
            </section>
       </>

    );
};

export default Days;