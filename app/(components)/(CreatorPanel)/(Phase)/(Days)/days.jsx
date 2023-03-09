import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../(CreatorInputs)/(dateInput)/dateInput";


const Days = (action) => {
    return (
       <>   
            <DateInput label={`What date is it for Day 1`} />
            <NumberInput label={`How many people for shift 1`} />

       </>

    );
};

export default Days;