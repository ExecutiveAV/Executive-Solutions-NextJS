import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Shifts = ({ action, currentPhase }) => {
    return (
        <>
            <NumberInput label={`How many contractors for shift 1?`} />
            <ToggleInput label={`Is this shift a half day?`} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => action(currentPhase - 1)} >Back</NavButton>
                <NavButton action={() => action(currentPhase + 1)} >Next</NavButton>
            </section>
        </>
        
    );
};
export default Shifts;