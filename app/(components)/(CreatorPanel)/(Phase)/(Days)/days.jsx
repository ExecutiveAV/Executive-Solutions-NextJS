import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import DateInput from "../(CreatorInputs)/(dateInput)/dateInput";
import ToggleInput from '../(CreatorInputs)/(toggleInput)/toggleInput';
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Days = ({ action, currentPhase }) => {
    return (
       <>   
            <DateInput label={`What date is it for Day 1`} />
            <NumberInput label={`How many shifts?`} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => action(currentPhase - 1)} >Back</NavButton>
                <NavButton action={() => action(currentPhase + 1)} >Next</NavButton>
            </section>
       </>

    );
};

export default Days;