'use client'

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"

//import actions from "../../../../../redux/slices/invoiceSlice.ts"
import { setInvoiceBodyContractors } from "../../../../../redux/slices/invoiceSlice" 

// import { useDispatch } from "react-redux"
import { useDispatch, useSelector } from "react-redux";

import { invoiceBodyContractorsSelector } from "../../../../../redux/selectors/invoiceSelectors"

const Body = () => {

    const dispatch = useDispatch();
    const contractors = useSelector(invoiceBodyContractorsSelector);




    return (
        <>
            <NumberInput label="How many contractors?" value={contractors.length} dispatched={(value) => dispatch(setInvoiceBodyContractors(value))} />
        </>
    );
};

export default Body;