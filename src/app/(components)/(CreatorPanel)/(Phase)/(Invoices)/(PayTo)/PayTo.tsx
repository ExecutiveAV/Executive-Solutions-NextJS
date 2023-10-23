'use client'

import { useDispatch, useSelector } from "react-redux"


import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import TextInput from "../../(CreatorInputs)/(textInput)/TextInput";

//import actions from invoiceSlice.ts
import { 
    setInvoicePayToAddress,
    setInvoicePayToAddress2,
    setInvoicePayToCity,
    setInvoicePayToState,
    setInvoicePayToZip,
    setInvoicePayToEmail,
    setInvoicePayTo,
} from "../../../../../redux/slices/invoiceSlice";

//import selectors from invoiceSelectors.ts
import { 
    invoicePayToAddressSelector,
    invoicePayToAddress2Selector,
    invoicePayToCitySelector,
    invoicePayToStateSelector,
    invoicePayToZipSelector,
    invoicePayToEmailSelector,
} from "../../../../../redux/selectors/invoiceSelectors";

const PayTo = () => {

    const dispatch = useDispatch();
    
    const invoicePayToAddress = useSelector(invoicePayToAddressSelector);
    const invoicePayToAddress2 = useSelector(invoicePayToAddress2Selector);
    const invoicePayToCity = useSelector(invoicePayToCitySelector);
    const invoicePayToState = useSelector(invoicePayToStateSelector);
    const invoicePayToZip = useSelector(invoicePayToZipSelector);
    const invoicePayToEmail = useSelector(invoicePayToEmailSelector);

    return (
        <>
            <OptionsInput label="Pay To" entryType="contractor" dispatched={(value) => dispatch(setInvoicePayTo(value))} value={invoicePayToAddress} />
            <TextInput label="Address" value={invoicePayToAddress} dispatched={(value) => dispatch(setInvoicePayToAddress(value))} />
            <TextInput label="Address 2" value={invoicePayToAddress2} dispatched={(value) => dispatch(setInvoicePayToAddress2(value))} />
            <TextInput label="City" value={invoicePayToCity} dispatched={(value) => dispatch(setInvoicePayToCity(value))} />
            <TextInput label="State" value={invoicePayToState} dispatched={(value) => dispatch(setInvoicePayToState(value))} />
            <TextInput label="Zip" value={invoicePayToZip} dispatched={(value) => dispatch(setInvoicePayToZip(value))} />
            <TextInput label="Email" value={invoicePayToEmail} dispatched={(value) => dispatch(setInvoicePayToEmail(value))} />
        </>
    );
};

export default PayTo;