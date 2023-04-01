'use client'
import styles from "../(CreatorInputs)/Inputs.module.css";

//Firestore DB
import { db } from "../../../../../utils/firebaseUtils/firebaseUtils";
import { collection, getDoc } from "firebase/firestore";

import Providers from "../../../(Provider)/Provider";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { setcompany, setScheduleNumber, setvenue, setDays, setCurrentPhase } from '../../../../redux/slices/scheduleSlice';

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import NavButton from "../(NavButton)/navButton";
import { Router } from "next/router";

const DaysCreator = (dayCounter) => {

    const day = (dayNumber) => ({
        dayNumber,
        date: "",
        shifts: []
    });

    const Days = [];
    for (let i = 0; i < dayCounter; i++) {
        Days.push(day(i));
    };
};

const SetUp = ({ action }) => {

    const schedule = useSelector(state => state.schedule);
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <Providers>
            <OptionsInput label="Which Company is it for?" entryType="company" dispatched={(value) => dispatch(setcompany(value))} />
            <NumberInput label={`Invoice # `} min={1} max={999} action={e => console.log(e)} dispatched={(value) => dispatch(setScheduleNumber(value))} />
            <OptionsInput label="What Venue?" entryType="venue" dispatched={(value) => dispatch(setvenue(value))} />
            <NumberInput label="How Many Days?" min={1} max={999} action={e => console.log(e)} dispatched={(value) => dispatch(setDays(value))} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => {router.back()}} >Back</NavButton>
                <NavButton action={() => {dispatch(setCurrentPhase(1))}} >Next</NavButton>
            </section>
        </Providers>
    )
}

export default SetUp;