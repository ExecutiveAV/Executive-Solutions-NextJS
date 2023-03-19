import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import ToggleInput from "../(CreatorInputs)/(toggleInput)/toggleInput";
import NavButton from "../(NavButton)/navButton";

import styles from '../(CreatorInputs)/Inputs.module.css';

const Contractor = ({ action, currentPhase }) => {
    return (
        <>
        <OptionsInput label={`Contractor 1 for shift 1`} ></OptionsInput>
        <OptionsInput label={"Position?"} />
        <NumberInput label={"Rate?"} />
        <ToggleInput label={"Walkaway?"} id={"walkaway"} />
            <section className={styles.buttonHolder} >
                <NavButton action={() => action(currentPhase - 1)} >Back</NavButton>
                <NavButton action={() => action(currentPhase + 1)} >Next</NavButton>
            </section>
        </>
    )
}

export default Contractor;