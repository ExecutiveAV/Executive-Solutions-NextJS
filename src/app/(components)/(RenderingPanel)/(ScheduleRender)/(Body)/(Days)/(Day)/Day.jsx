import styles from './Day.module.css';

import Category from './(Category)/Category';
import { checkIfUndefined } from '../../../../../../../../utils/jsUtils/utils';

const Day = ( { dayData, dayCounter } ) => {

    const formatTime = time => {
        if (time) {
            let formatTime = time.split(":");
            let meridian = "";
            let hour = formatTime[0];
            if (hour > 11) {
                meridian = " PM";
                if (hour > 12) {
                    hour = hour - 12;
                }
            } else {
                meridian = " AM";
            }
            formatTime[0] = hour
            //check if time contains meridian
            if (formatTime[1].includes("AM") || formatTime[1].includes("PM")) {
                formatTime = formatTime.join(":");
            } else {
                formatTime = formatTime.join(":") + meridian;
            }
            return formatTime;
        }
    }
    
    const formatDate = date => {
        if (date) {
            try {
                let formatDate = date.split("/");
                formatDate[2] = formatDate[2].slice(2, 4);
                formatDate = formatDate.join("/");
                return formatDate;
            } catch (error) {
                console.error(error);
            }
        }
    };

    const days = <section className={styles.schedule} >{dayCounter + 1}</section>;

    const dates = <section className={styles.schedule} >{formatDate(dayData.date)}</section>;

    const creator = (shifts) => {
        const groups = [];
        for (let i = 0; i < shifts.length; i++) {
            const shift = shifts[i];
            
            const bumper = (array, i) => {
                if (array.length === 1) {
                    return false;
                }
                if (array.length - 1 === i && array.length > 1) {
                    return false;
                }
                return false;
            }

            const mapper = (shift, key) => {
                const temp = shift["contractors"].map(tech => (<section key={key} className={styles.schedule} >{tech[key]}</section>));
                return temp;
            }

            const mapperTwoArgs = (shift, arg1, arg2) => {
                const temp = []
                for (let i = 0; i < shift["contractors"].length; i++) {
                    const tech = shift["contractors"][i];
                    const position = tech[arg1][arg2];
                    temp.push(<section key={i} className={`${styles.schedule} ${bumper(shift.contractors) ? styles.lineBumper : ""}`} >{position}</section>);
                }
                return temp;
            }
                    
            const qty = (<section className={styles.schedule} >{shift["contractors"].length}</section>);
            const positions = checkIfUndefined(shift, (shift) => mapperTwoArgs(shift, "contractorPosition", "positionName"));
            const techs = checkIfUndefined(shift, (shift) => mapper(shift, "contractorName"))
            const timez = shift["contractors"].map(tech => (<section className={styles.schedule} >{`${formatTime(shift.startTime)} - ${formatTime(shift.endTime)}`}</section>));
            let computedTime = parseInt(shift.endTime.slice(0, 2)) - parseInt(shift.startTime.slice(0, 2));
            if (computedTime > 0 && computedTime < 6) {
                computedTime = 5;
            } else if (computedTime > 5 && computedTime < 11) {
                computedTime = 10;
            } else if (Number.isNaN(computedTime)) {
                computedTime = ""
            }
            const hours = shift["contractors"].map(tech => (<section className={styles.schedule} >{computedTime}</section>));
            groups.push(
                <section className={`${styles.groups} ${styles.lineBumper}`} >
                    <Category size={"qty"} >{qty}</Category>
                    <Category size={"position"} >{positions}</Category>
                    <Category size="tech" >{techs}</Category>
                    <Category size="time" >{timez}</Category>
                    <Category size="hrs" >{hours}</Category>
                </section>
            );
        }

        return groups;
    };

    const groups = checkIfUndefined(dayData.shifts, creator);

    return (
        <section className={styles.day} >
            <section className={styles.dayInfo} >
                <Category size="day" >{days}</Category>
                <Category size="date" >{dates}</Category>
                <Category size="groups" >{groups}</Category>
            </section>
            <section className={styles.bumper} />
        </section>
    );
};

export default Day;