'use client'

import { useSelector, useDispatch } from "react-redux";

import { setContractorName, setContractorPosition, setContractorRate, setWalkAway, setScheduleCurrentContractor, setScheduleCurrentShift, setScheduleCurrentDay, setScheduleCurrentPhase } from '../../../../../redux/slices/scheduleSlice';
import { contractorNameSelector, contractorPositionSelector, contractorRateSelector, contractorWalkawaySelector, daysSelector, scheduleCurrentShiftSelector, shiftsSelector, scheduleCurrentContractorSelector, contractorsSelector, scheduleCurrentPhaseSelector, scheduleCurrentDaySelector } from "../../../../../redux/selectors/scheduleSelectors";

import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../../(NavButton)/navButton";

import styles from '../../(CreatorInputs)/Inputs.module.css';

const Contractor = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(scheduleCurrentDaySelector);
    const Days = useSelector(daysSelector);
    const currentShift = useSelector(scheduleCurrentShiftSelector);
    const Shifts = useSelector(shiftsSelector);
    const currentContractor = useSelector(scheduleCurrentContractorSelector);
    const Contractors = useSelector(contractorsSelector);
    const name = useSelector(contractorNameSelector);
    const position = useSelector(contractorPositionSelector);
    const rate = useSelector(contractorRateSelector);
    const walkaway = useSelector(contractorWalkawaySelector);

    const currentPhase = useSelector(scheduleCurrentPhaseSelector);

    const checkIfLastContractorAndLastShiftAndLastDay = () => {
        if (currentContractor === Contractors.length - 1 && currentShift === Shifts.length - 1 && currentDay === Days.length - 1) {
        } else if (currentContractor === Contractors.length - 1 && currentShift === Shifts.length - 1) {
            dispatch(setScheduleCurrentDay(currentDay + 1));
            dispatch(setScheduleCurrentShift(0));
            dispatch(setScheduleCurrentContractor(0));
            dispatch(setScheduleCurrentPhase(1));
        } else if (currentContractor === Contractors.length - 1) {
            dispatch(setScheduleCurrentShift(currentShift + 1));
            dispatch(setScheduleCurrentContractor(0));
            dispatch(setScheduleCurrentPhase(2));
        } else {
            dispatch(setScheduleCurrentContractor(currentContractor + 1));
        }
    };
    
    const checkIfFirstContractorFromCurrentShift = () => {
        if (currentContractor === 0) {
            dispatch(setScheduleCurrentPhase(currentPhase - 1));
            dispatch(setScheduleCurrentContractor(Contractors.length - 1));
        } else {
            dispatch(setScheduleCurrentContractor(currentContractor - 1));
        }
    };

    return (
        <>
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <OptionsInput value={name ? name : null} label={`Contractor ${currentContractor + 1} for shift ${currentShift + 1}`} entryType={"contractor"} dispatched={value => dispatch(setContractorName(value.contractorName))} ></OptionsInput>
            <OptionsInput value={position.positionName ? position.positionName : null} label={"Position?"} entryType={"position"} dispatched={value => dispatch(setContractorPosition(value))} />
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