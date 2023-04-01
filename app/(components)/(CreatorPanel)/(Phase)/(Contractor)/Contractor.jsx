'use client'

import { useSelector, useDispatch } from "react-redux";

import { setContractors } from '../../../../redux/slices/scheduleSlice';

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Contractor = ({ action, currentPhase }) => {

    const dispatch = useDispatch();

    const currentDay = useSelector(state => state.current.day);
    const Days = useSelector(state => state.scheduleData.days);
    const currentShift = useSelector(state => state.current.shift);
    const Shifts = useSelector(state => state.scheduleData.days[currentDay].shifts);
    const currentContractor = useSelector(state => state.current.contractor);
    const Contractors = useSelector(state => state.scheduleData.days[currentDay].shifts[currentShift].contractors);

    const checkIfLast = (action) => {
        if (currentPhase === 3 && currentDay === Days.length - 1 && currentShift === Shifts.length - 1 && currentContractor === Contractors.length - 1) {
            action();
        }
        return false;
    };

    return (
        <>
        <OptionsInput label={`Contractor ${currentContractor + 1} for shift ${currentShift + 1}`} entryType={"tech"} ></OptionsInput>
        <OptionsInput label={"Position?"} entryType={"position"} />
        <NumberInput label={"Rate?"} />
        <ToggleInput label={"Walkaway?"} id={"walkaway"} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => action(currentPhase - 1)} >Back</NavButton>
                <NavButton action={() => action(currentPhase + 1)} >Next</NavButton>
            </section>
        </>
    )
}

export default Contractor;