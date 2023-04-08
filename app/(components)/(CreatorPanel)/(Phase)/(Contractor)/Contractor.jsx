'use client'

import { useSelector, useDispatch } from "react-redux";

import { setContractorName, setContractorPosition, setContractorRate, setWalkAway, setCurrentContractor, setCurrentShift, setCurrentDay, setCurrentPhase } from '../../../../redux/slices/scheduleSlice';
import { contractorNameSelector, contractorPositionSelector, contractorRateSelector, contractorWalkawaySelector, currentDaySelector, daysSelector, currentShiftSelector, shiftsSelector, currentContractorSelector, contractorsSelector } from "../../../../redux/store/selectors/scheduleSelectors";

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Contractor = ({ currentPhase }) => {

    const dispatch = useDispatch();

    const currentDay = useSelector(currentDaySelector);
    const Days = useSelector(daysSelector);
    const currentShift = useSelector(currentShiftSelector);
    const Shifts = useSelector(shiftsSelector);
    const currentContractor = useSelector(currentContractorSelector);
    const Contractors = useSelector(contractorsSelector);
    const name = useSelector(contractorNameSelector);
    const position = useSelector(contractorPositionSelector);
    const rate = useSelector(contractorRateSelector);
    const walkaway = useSelector(contractorWalkawaySelector);

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
            dispatch(setCurrentContractor(Contractors.length - 1));
        } else {
            dispatch(setCurrentContractor(currentContractor - 1));
        }
    };

    return (
        <>
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <OptionsInput value={name ? name : null} label={`Contractor ${currentContractor + 1} for shift ${currentShift + 1}`} entryType={"tech"} dispatched={value => dispatch(setContractorName(value))} ></OptionsInput>
            <OptionsInput value={position ? position : null} label={"Position?"} entryType={"position"} dispatched={value => dispatch(setContractorPosition(value))} />
            <NumberInput value={rate ? rate : null} label={"Rate?"} dispatched={value => dispatch(setContractorRate(value))} />
            <ToggleInput value={walkaway ? walkaway : null} label={"Walkaway?"} id={"walkaway"} dispatched={value => dispatch(setWalkAway(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => checkIfFirstContractorFromCurrentShift()} >Back</NavButton>
                <NavButton action={() => checkIfLastContractorAndLastShiftAndLastDay()} >Next</NavButton>
            </section>
        </>
    );
}

export default Contractor;