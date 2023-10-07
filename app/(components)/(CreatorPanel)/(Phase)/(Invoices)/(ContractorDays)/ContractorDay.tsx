'use client'

import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput";
import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import TimeInput from "../../(CreatorInputs)/(timeInput)/timeInput";
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput";

const ContractorDay = () => {
    return (
        <>
            <label>Day X for Contractor Y</label>
            <DateInput label="Date" dispatched={() => (null)} />
            <TimeInput label="Start Time" dispatched={() => (null)} value />
            <TimeInput label="End Time" dispatched={() => (null)} value />
            <OptionsInput label="Position" entryType="workType" dispatched={() => (null)} />
            <ToggleInput label="Walkaway?" dispatched={() => (null)} value={false} id="walkaway" />
            <NumberInput label="Hours Worked" dispatched={() => (null)} />
            <NumberInput label="OT Hours Worked" dispatched={() => (null)} />
            <NumberInput label="Rate" dispatched={() => (null)} />
        </>
    );
};

export default ContractorDay;