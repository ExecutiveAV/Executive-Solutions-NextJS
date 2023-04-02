'use client'

import { useSelector, useDispatch } from "react-redux";

import { setContractorName, setContractorPosition, setContractorRate, setWalkAway, setCurrentContractor, setCurrentShift, setCurrentDay, setCurrentPhase } from '../../../../redux/slices/scheduleSlice';

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Contractor = ({ action, currentPhase }) => {

    const dispatch = useDispatch();

    const currentDay = useSelector(state => state.schedule.current.day);
    const Days = useSelector(state => state.schedule.scheduleData.days);
    const currentShift = useSelector(state => state.schedule.current.shift);
    const Shifts = useSelector(state => state.schedule.scheduleData.days[currentDay].shifts);
    const currentContractor = useSelector(state => state.schedule.current.contractor);
    const Contractors = useSelector(state => state.schedule.scheduleData.days[currentDay].shifts[currentShift].contractors);

    const checkIfLastContractorAndLastShiftAndLastDay = () => {
        if (currentContractor === Contractors.length - 1 && currentShift === Shifts.length - 1 && currentDay === Days.length - 1) {
        } else if (currentContractor === Contractors.length - 1 && currentShift === Shifts.length - 1) {
            dispatch(setCurrentDay(currentDay + 1));
            dispatch(setCurrentShift(0));
            dispatch(setCurrentContractor(0));
            dispatch(setCurrentPhase(1));
        } else if (currentContractor === Contractors.length - 1) {
            dispatch(setCurrentShift(currentShift + 1));
            dispatch(setCurrentContractor(0));
            dispatch(setCurrentPhase(2));
        } else {
            dispatch(setCurrentContractor(currentContractor + 1));
        }
    };
    
    const checkIfFirstContractorFromCurrentShift = () => {
        if (currentContractor === 0) {
            dispatch(setCurrentPhase(currentPhase - 1));
            dispatchEvent(setCurrentContractor(Contractors.length - 1));
        } else {
            dispatch(setCurrentContractor(currentContractor - 1));
        }
    };

    return (
        <>
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <OptionsInput label={`Contractor ${currentContractor + 1} for shift ${currentShift + 1}`} entryType={"tech"} dispatched={value => dispatch(setContractorName(value))} ></OptionsInput>
            <OptionsInput label={"Position?"} entryType={"position"} dispatched={value => dispatch(setContractorPosition(value))} />
            <NumberInput label={"Rate?"} dispatched={value => dispatch(setContractorRate(value))} />
            <ToggleInput label={"Walkaway?"} id={"walkaway"} dispatched={value => dispatch(setWalkAway(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstContractorFromCurrentShift()} >Back</NavButton>
                <NavButton action={() => checkIfLastContractorAndLastShiftAndLastDay()} >Next</NavButton>
            </section>
        </>
    );
}

export default Contractor;