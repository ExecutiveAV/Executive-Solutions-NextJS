'use client'
import styles from "../(CreatorInputs)/Inputs.module.css";

import OptionsInput from "../(CreatorInputs)/(optionsInput)/optionsInput";
import NumberInput from "../(CreatorInputs)/(numberInput)/numberInput";
import NavButton from "../(NavButton)/navButton";

const SetUp = ({action}) => {

    return (
        <>
            <OptionsInput label="Which Company is it for?" entryType="company" />
            <NumberInput label={`Invoice # `} min={1} max={999} action={e => console.log(e)} />
            <OptionsInput label="What Venue?" entryType="venue" />
            <NumberInput label="How Many Days?" min={1} max={999} action={e => console.log(e)} />
            <section className={styles.buttonHolder} >
                <NavButton to="" >Back</NavButton>
                <NavButton action={() => action(1)} >Next</NavButton>
            </section>
        </>
    )
}

export default SetUp;