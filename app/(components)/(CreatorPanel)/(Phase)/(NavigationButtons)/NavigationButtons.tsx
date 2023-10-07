'use client'
import styles from '../(CreatorInputs)/Inputs.module.css';
import NavButton from '../(NavButton)/navButton';

const NavigationButtons = ({ backwardsFunction, forwardFunction }:{
    backwardsFunction: () => void,
    forwardFunction: () => void
}) => {
    return (
        <section className={styles.buttonHolder} >
            <NavButton action={() => backwardsFunction()} >Back</NavButton>
            <NavButton action={() => forwardFunction()} >Next</NavButton>
        </section>
    );
};

export default NavigationButtons;