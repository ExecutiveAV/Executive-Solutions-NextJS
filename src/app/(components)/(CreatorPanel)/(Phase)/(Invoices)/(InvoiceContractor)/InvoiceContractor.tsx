'use client'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput"
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput"

import { setInvoiceBodyContractor, setInvoiceBodyContractorDays, setInvoiceBodyContractors, setInvoiceCurrentContractor, setInvoiceCurrentDay, setInvoiceCurrentPhase } from "../../../../../redux/slices/invoiceSlice";
import { invoiceCurrentContractorSelector, invoiceCurrentDaySelector, invoiceCurrentPhaseSelector } from "../../../../../redux/selectors/invoiceSelectors";

import { newEntryContractor } from "../../../../../types/types";

const InvoiceContractor = () => {

    const dispatch = useDispatch();

    const invoiceCurrentPhase = useSelector(invoiceCurrentPhaseSelector);
    const invoiceCurrentContractor = useSelector(invoiceCurrentContractorSelector);
    const invoiceCurrentDay = useSelector(invoiceCurrentDaySelector);

    return (
       <>
            <OptionsInput label="Contractor's Name:" entryType="contractor" dispatched={(value: newEntryContractor ) => dispatch(setInvoiceBodyContractor(value))} />
            <NumberInput label="How Many Days Worked?" dispatched={() => (null)} />
            <ToggleInput label="Expense?" dispatched={() => (null)} value={false} id="" />
       </> 
    );
};

export default InvoiceContractor;