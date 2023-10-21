import styles from './FilterButton.module.css';

import Button from "../(Button)/Button";
import Arrow from '../../(Arrow)/Arrow';

const FilterButton = () => {
    return (
        <Button >
            <section className={styles.fileterButton} >
                <section className={styles.container} >
                    <p className={styles.text} >Filter</p>
                    <Arrow className={styles.arrow} />
                </section>
            </section>
        </Button>
        
    );
};

export default FilterButton;