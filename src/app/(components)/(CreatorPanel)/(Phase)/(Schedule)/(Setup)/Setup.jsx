'use client'
import Providers from "../../../../(Provider)/Provider";
import { useSelector, useDispatch } from "react-redux";

import { companyNameSelector, venueNameSelector, scheduleNumberSelector, daysSelector } from "../../../../../redux/selectors/scheduleSelectors";

import { setScheduleCompany, setScheduleNumber, setScheduleVenue, setScheduleDays } from '../../../../../redux/slices/scheduleSlice';

import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";

const SetUp = () => {

    const dispatch = useDispatch();
    const companyName = useSelector(companyNameSelector);
    const venueName = useSelector(venueNameSelector);
    const scheduleNumber = useSelector(scheduleNumberSelector);
    const days = useSelector(daysSelector);

    console.log("setUp", companyName);

    return (
        <Providers>
            <OptionsInput value={companyName ? companyName : null} label="Which Company is it for?" entryType="company" dispatched={(value) => dispatch(setScheduleCompany(value))} />
            <NumberInput value={scheduleNumber ? scheduleNumber : null} label={`Invoice # `} min={1} max={999} dispatched={(value) => dispatch(setScheduleNumber(value))} />
            <OptionsInput value={venueName ? venueName : "***Make a selection***"} label="What Venue?" entryType="venue" dispatched={(value) => dispatch(setScheduleVenue(value))} />
            <NumberInput value={days ? days.length : null} label="How Many Days?" min={1} max={999} dispatched={(value) => dispatch(setScheduleDays(value))} />
        </Providers>
    )
}

export default SetUp;