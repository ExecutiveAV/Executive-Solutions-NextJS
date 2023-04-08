import styles from './Day.module.css';

import Category from './(Category)/Category';
import { checkIfUndefined } from '../../../../../../utils/jsUtils/utils';

const Day = ( { dayData, dayCounter } ) => {

    const days = <section className={styles.schedule} >{dayCounter + 1}</section>;

    const dates = <section className={styles.schedule} >{dayData.date}</section>;
    //Guys info is empty that's why it's not working

    const creator = (shifts) => {
        return (
            shifts.map(shift => {

                const mapper = (shift, key) => {
                    const temp = shift["contractors"].map(tech => (<section className={styles.schedule} >{tech[key]}</section>));
                    return temp;
                }
                        
                const qty = (<section className={styles.schedule} >{shift["contractors"].length}</section>);
                const positions = checkIfUndefined(shift, (shift) => mapper(shift, "contractorPosition"));
                const techs = checkIfUndefined(shift, (shift) => mapper(shift, "contractorName"))
                const timez = shift["contractors"].map(tech => (<section className={styles.schedule} >{`${shift.startTime} - ${shift.endTime}`}</section>));
                let computedTime = parseInt(shift.endTime.slice(0, 2)) - parseInt(shift.startTime.slice(0, 2));
                if (computedTime > 0 && computedTime < 6) {
                    computedTime = 5;
                } else if (computedTime > 5 && computedTime < 11) {
                    computedTime = 10;
                } else if (Number.isNaN(computedTime)) {
                    computedTime = ""
                }
                const hours = shift["contractors"].map(tech => (<section className={styles.schedule} >{computedTime}</section>));
                return (
                    <section className={styles.groups} >
                        <Category size={"qty"} >{qty}</Category>
                        <Category size={"position"} >{positions}</Category>
                        <Category size="tech" >{techs}</Category>
                        <Category size="time" >{timez}</Category>
                        <Category size="hrs" >{hours}</Category>
                    </section>
                );
            })
        );
    };

    const groups = checkIfUndefined(dayData.shifts, creator);

    return (
        <section className={styles.day} >
            <section className={styles.dayInfo} >
                <Category size="day" >{days}</Category>
                <Category size="date" >{dates}</Category>
                <Category size="groups" >{groups}</Category>
            </section>
        </section>
    );
};

export default Day;