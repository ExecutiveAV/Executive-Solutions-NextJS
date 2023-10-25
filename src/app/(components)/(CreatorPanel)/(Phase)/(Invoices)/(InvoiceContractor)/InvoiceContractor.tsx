'use client'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput"
import ToggleInput from "../../(CreatorInputs)/(toggleInput)/toggleInput"

import { setInvoiceBodyContractor, setInvoiceBodyContractorDays, setInvoiceBodyContractors, setInvoiceBodyContractorTitle, setInvoiceCurrentDay, setInvoiceCurrentPhase } from "../../../../../redux/slices/invoiceSlice";
import { invoiceCurrentContractorSelector, invoiceCurrentDaySelector, invoiceCurrentPhaseSelector, invoiceBodyContractorTitleSelector } from "../../../../../redux/selectors/invoiceSelectors";

import { newEntryContractor } from "../../../../../types/types";

const InvoiceContractor = () => {

    const dispatch = useDispatch();

    const invoiceCurrentPhase = useSelector(invoiceCurrentPhaseSelector);
    const invoiceCurrentContractor = useSelector(invoiceBodyContractorTitleSelector);
    const invoiceCurrentDay = useSelector(invoiceCurrentDaySelector);

    return (
       <>
            <OptionsInput label="Contractor's Name:" vslue={invoiceCurrentContractor} entryType="contractor" dispatched={(name) => dispatch(setInvoiceBodyContractorTitle(name.contractorName))} />
       </> 
    );
};

export default InvoiceContractor;