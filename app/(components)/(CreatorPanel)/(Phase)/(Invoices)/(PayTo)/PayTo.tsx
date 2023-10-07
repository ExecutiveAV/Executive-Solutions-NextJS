'use client'

import OptionsInput from "../../(CreatorInputs)/(optionsInput)/optionsInput";
import TextInput from "../../(CreatorInputs)/(textInput)/TextInput";

const PayTo = () => {
    return (
        <>
            <OptionsInput label="Pay To" entryType="" dispatched={() => (null)} />
            <TextInput label="Address" dispatched={() => (null)} />
            <TextInput label="City" dispatched={() => (null)} />
            <TextInput label="State" dispatched={() => (null)} />
            <TextInput label="Zip" dispatched={() => (null)} />
            <OptionsInput label="email" entryType="email" dispatched={() => (null)} />
        </>
    );
};

export default PayTo;