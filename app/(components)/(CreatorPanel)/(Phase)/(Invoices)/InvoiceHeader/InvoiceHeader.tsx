'use client'

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"
import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput"
import DateInput from "../../(CreatorInputs)/(dateInput)/dateInput"

const InvoiceHeader = () => {
    return (
        <>
            <h2>Invoice Header</h2>
            <NumberInput label="Invoice Number" dispatched={() => (null)}  />
            <OptionsInput label="Venue" entryType="" dispatched={() => (null)} />
            <DateInput label="Issued Date" dispatched={() => (null)} />
            <OptionsInput label="Payment Term" entryType="" dispatched={() => (null)} />
            <DateInput label="Due Date" dispatched={() => (null)} />
        </>
    );
};


export default InvoiceHeader;