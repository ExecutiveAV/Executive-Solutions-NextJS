'use client'

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput"
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput"

const Contractor = () => {
    return (
       <>
            <OptionsInput label="Contractor's Name:" entryType="" dispatched={() => (null)} />
            <NumberInput label="How Many Days Worked?" dispatched={() => (null)} />
            <ToggleInput label="Expense?" dispatched={() => (null)} value={false} id="" />
       </> 
    );
};

export default Contractor;