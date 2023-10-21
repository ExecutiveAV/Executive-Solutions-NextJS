'use client'

import { useDispatch, useSelector } from "react-redux"

import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import TextInput from "../../(CreatorInputs)/(textInput)/TextInput";

//import actions from invoiceSlice.ts
import { 
    setInvoiceBillToAddress,
    setInvoiceBillToAddress2,
    setInvoiceBillToCity,
    setInvoiceBillToState,
    setInvoiceBillToZip,
    setInvoiceBillToEmail,
    setInvoiceBillTo,
} from "../../../../../redux/slices/invoiceSlice";

//import selectors from invoiceSelectors.ts
import { 
    invoiceBillToAddressSelector,
    invoiceBillToAddress2Selector,
    invoiceBillToCitySelector,
    invoiceBillToStateSelector,
    invoiceBillToZipSelector,
    invoiceBillToEmailSelector,
} from "../../../../../redux/selectors/invoiceSelectors";



const BillTo = () => {

    const dispatch = useDispatch();

    const invoiceBillToAddress = useSelector(invoiceBillToAddressSelector);
    const invoiceBillToAddress2 = useSelector(invoiceBillToAddress2Selector);
    const invoiceBillToCity = useSelector(invoiceBillToCitySelector);
    const invoiceBillToState = useSelector(invoiceBillToStateSelector);
    const invoiceBillToZip = useSelector(invoiceBillToZipSelector);
    const invoiceBillToEmail = useSelector(invoiceBillToEmailSelector);

    return (
        <>
            <OptionsInput label="Bill To" entryType="company" dispatched={(value) => dispatch(setInvoiceBillTo(value))} />
            <TextInput label="Address" value={invoiceBillToAddress} dispatched={(value) => dispatch(setInvoiceBillToAddress(value))}/>
            <TextInput label="Address 2" value={invoiceBillToAddress2} dispatched={(value) => dispatch(setInvoiceBillToAddress2(value))}/>
            <TextInput label="City" value={invoiceBillToCity} dispatched={(value) => dispatch(setInvoiceBillToCity(value))}/>
            <TextInput label="State" value={invoiceBillToState} dispatched={(value) => dispatch(setInvoiceBillToState(value))}/>
            <TextInput label="Zip" value={invoiceBillToZip} dispatched={(value) => dispatch(setInvoiceBillToZip(value))}/>
            <TextInput label="Email" value={invoiceBillToEmail} dispatched={(value) => dispatch(setInvoiceBillToEmail(value))}/>
        </>
    );

};

export default BillTo;