'use client'
import styles from "../(CreatorInputs)/Inputs.module.css";

import Providers from "../../../(Provider)/Provider";
import { useSelector, useDispatch } from "react-redux";

import { setClientCompany, setScheduleNumber, setShowVenue, setDays } from '../../../../redux/slices/scheduleSlice';

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import NavButton from "../(NavButton)/navButton";

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

const SetUp = ({action}) => {

    const schedule = useSelector(state => state.schedule);
    console.log("schedule", schedule)

    return (
        <Providers>
            <OptionsInput label="Which Company is it for?" entryType="company" />
            <NumberInput label={`Invoice # `} min={1} max={999} action={e => console.log(e)} />
            <OptionsInput label="What Venue?" entryType="venue" />
            <NumberInput label="How Many Days?" min={1} max={999} action={e => console.log(e)} />
            <section className={styles.buttonHolder} >
                <NavButton to="" >Back</NavButton>
                <NavButton action={() => action(1)} >Next</NavButton>
            </section>
        </Providers>
    )
}

export default SetUp;