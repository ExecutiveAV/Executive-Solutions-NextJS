'use client'

import { useDispatch, useSelector } from "react-redux"

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput"
import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput"

//import selectors from invoiceSelectors.ts
import { 
    invoiceVenueSelector,
} from "../../../../../redux/selectors/invoiceSelectors";

//import actions from invoiceSlice.ts
import { 
    setInvoiceHeaderInvoiceNumber,
    setInvoiceHeaderInvoiceVenue,
    setInvoiceHeaderInvoiceIssuedDate,
    setInvoiceHeaderInvoicePaymentTerms,
    setInvoiceHeaderInvoiceDueDate,
} from "../../../../../redux/slices/invoiceSlice";
import TextInput from "../../(CreatorInputs)/(textInput)/TextInput"
const InvoiceHeader = () => {

    const dispatch = useDispatch();

    const invoiceVenue = useSelector(invoiceVenueSelector);

    return (
        <>
            <h2>Invoice Header</h2>
            <NumberInput value={1} label="Invoice Number" dispatched={(value) => dispatch(setInvoiceHeaderInvoiceNumber(value))} />
            <OptionsInput value={invoiceVenue} label="Venue" entryType="venue" dispatched={(value) => dispatch(setInvoiceHeaderInvoiceVenue(value))} />
            <DateInput label="Issue Date" dispatched={(value) => dispatch(setInvoiceHeaderInvoiceIssuedDate(value))} />
            <TextInput label="Payment Terms" dispatched={(value) => dispatch(setInvoiceHeaderInvoicePaymentTerms(value))} />
            <DateInput label="Due Date" dispatched={(value) => dispatch(setInvoiceHeaderInvoiceDueDate(value))} />
        </>
    );
};


export default InvoiceHeader;