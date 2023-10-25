'use client'

import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput";
import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput";
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import TimeInput from "../../(CreatorInputs)/(timeInput)/timeInput";
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput";

//import corresponding actions from ../../../../redux/actions/invoiceSlice.ts
//import corresponding selectors from ../../../../redux/selectors/invoiceSelectors.ts
import {
    setInvoiceBodyContractorDayDate,
    setInvoiceBodyContractorDayTimeIn,
    setInvoiceBodyContractorDayTimeOut,
    setInvoiceBodyContractorDayPosition,
    setInvoiceBodyContractorDayWalkaway,
    setInvoiceBodyContractorDayOT,
    setInvoiceBodyContractorDayRate,
} from "../../../../../redux/slices/invoiceSlice";

import {
    selectInvoiceBodyContractorDayDate,
    selectInvoiceBodyContractorDayTimeIn,
    selectInvoiceBodyContractorDayTimeOut,
    selectInvoiceBodyContractorDayPosition,
    selectInvoiceBodyContractorDayWalkaway,
    selectInvoiceBodyContractorDayOT,
    selectInvoiceBodyContractorDayRate,
} from "../../../../../redux/selectors/invoiceSelectors";


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