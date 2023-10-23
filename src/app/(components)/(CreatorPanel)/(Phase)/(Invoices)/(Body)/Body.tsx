'use client'

import NumberInput from "../../(CreatorInputs)/(numberInput)/numberInput"

//import actions from "../../../../../redux/slices/invoiceSlice.ts"
import { setInvoiceBodyContractors } from "../../../../../redux/slices/invoiceSlice" 

// import { useDispatch } from "react-redux"
import { useDispatch } from "react-redux";

const Body = () => {

    const dispatch = useDispatch();


    return (
        <>
            <NumberInput label="How many contractors?" dispatched={(value) => dispatch(setInvoiceBodyContractors(value))} />
        </>
    );
};

export default Body;