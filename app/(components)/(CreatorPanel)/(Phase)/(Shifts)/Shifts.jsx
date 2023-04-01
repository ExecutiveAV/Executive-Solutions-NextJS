'use client'

import { useSelector, useDispatch } from 'react-redux';

import { setContractors } from '../../../../redux/slices/scheduleSlice';

import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Shifts = ({ action, currentPhase }) => {

    const dispatch = useDispatch();

    const currentShift = useSelector(state => state.schedule.current.shift);
    return (
        <>
            <NumberInput label={`How many contractors for shift ${currentShift + 1}?`} dispatched={value => dispatch(setContractors(value))} />
            <ToggleInput label={`Is this shift a half day?`} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => action(currentPhase - 1)} >Back</NavButton>
                <NavButton action={() => action(currentPhase + 1)} >Next</NavButton>
            </section>
        </>
        
    );
};
export default Shifts;