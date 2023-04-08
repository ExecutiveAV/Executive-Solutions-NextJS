'use client'
import styles from "../(CreatorInputs)/Inputs.module.css";

//Firestore DB
import { db } from "../../../../../utils/firebaseUtils/firebaseUtils";
import { collection, getDoc } from "firebase/firestore";

import Providers from "../../../(Provider)/Provider";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { companySelector, venueSelector, scheduleNumberSelector, daysSelector } from "../../../../redux/store/selectors/scheduleSelectors";

import { setcompany, setScheduleNumber, setvenue, setDays, setCurrentPhase } from '../../../../redux/slices/scheduleSlice';

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import NavButton from "../(NavButton)/navButton";

const SetUp = ({ action }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const company = useSelector(companySelector);
    const venue = useSelector(venueSelector);
    const scheduleNumber = useSelector(scheduleNumberSelector);
    const days = useSelector(daysSelector);

    const checkForEmpty = () => {
        let empty = false;
        if (company === "") {
            empty = true;
        };
        if (venue === "") {
            empty = true;
        };
        if (scheduleNumber === 0) {
            empty = true;
        };  
        if (days === 0) {
            empty = true;
        };
        return empty;
    };

    const handleNext = () => {
        if (checkForEmpty()) {  
            alert("Please fill out all fields");
        } else {
            dispatch(setCurrentPhase(1));
        };
    };

    return (
        <Providers>
            <OptionsInput value={company ? company : null} label="Which Company is it for?" entryType="company" dispatched={(value) => dispatch(setcompany(value))} />
            <NumberInput value={scheduleNumber ? scheduleNumber : null} label={`Invoice # `} min={1} max={999} dispatched={(value) => dispatch(setScheduleNumber(value))} />
            <OptionsInput value={venue ? venue : null} label="What Venue?" entryType="venue" dispatched={(value) => dispatch(setvenue(value))} />
            <NumberInput value={days ? days.length : null} label="How Many Days?" min={1} max={999} action={e => console.log(e)} dispatched={(value) => dispatch(setDays(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => {router.back()}} >Back</NavButton>
                <NavButton action={handleNext} >Next</NavButton>
            </section>
        </Providers>
    )
}

export default SetUp;