'use client'

import { useSelector, useDispatch } from "react-redux";

import { setScheduleContractorName, setScheduleContractorPosition, setScheduleContractorRate, setScheduleContractorWalkaway } from "../../../../../redux/slices/scheduleSlice";
import { contractorNameSelector, contractorPositionSelector, contractorRateSelector, contractorWalkawaySelector, scheduleCurrentShiftSelector, scheduleCurrentContractorSelector, scheduleCurrentDaySelector } from "../../../../../redux/selectors/scheduleSelectors";

import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../../(NavButton)/navButton";

import styles from '../../(CreatorInputs)/Inputs.module.css';

const Contractor = () => {

    const dispatch = useDispatch();

    const currentDay = useSelector(scheduleCurrentDaySelector);
    const currentShift = useSelector(scheduleCurrentShiftSelector);
    const currentContractor = useSelector(scheduleCurrentContractorSelector);
    const name = useSelector(contractorNameSelector);
    const position = useSelector(contractorPositionSelector);
    const rate = useSelector(contractorRateSelector);
    const walkaway = useSelector(contractorWalkawaySelector);

    return (
        <>
            <p className={styles.inputLabel} >{`Day ${currentDay + 1}`}</p>
            <OptionsInput value={name ? name : null} label={`Contractor ${currentContractor + 1} for shift ${currentShift + 1}`} entryType={"contractor"} dispatched={value => dispatch(setScheduleContractorName(value.contractorName))} ></OptionsInput>
            <OptionsInput value={position.positionName ? position.positionName : null} label={"Position?"} entryType={"position"} dispatched={value => dispatch(setScheduleContractorPosition(value))} />
            <NumberInput value={rate ? rate : null} label={"Rate?"} dispatched={value => dispatch(setScheduleContractorRate(value))} />
            <ToggleInput value={walkaway ? walkaway : null} label={"Walkaway?"} id={"walkaway"} dispatched={value => dispatch(setScheduleContractorWalkaway(value))} />
        </>
    );
}

export default Contractor;