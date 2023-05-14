'use client'

import { useSelector } from 'react-redux';
import { Document, Page, Text, View, StyleSheet, Font  } from '@react-pdf/renderer';

import { daysSelector, companyNameSelector, scheduleNumberSelector, venueNameSelector, venueAddressSelector, venueAddress2Selector, venueCitySelector, venueStateSelector, venueZipSelector  } from '../../../redux/selectors/scheduleSelectors';

// Font.register({ family: "GillSans", src: '../../../../assets/fonts/GillSans-Light.ttf' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        width: "100%",
        height: "100%",
        padding: "0px 22px 0px 22px",
    },
    section: {
        marginTop: "10px",
        marginLeft: "auto",
        padding: "0px",
        flexGrow: 0,
    },
    headerTitle: {
        fontFamily: "Helvetica",
        width: "164px",
        height: "32px",
        color: "#fff",
        backgroundColor: "#808080",
        // fontSize: "24px",
        textAlign: "left",
        paddingTop: "8px",
        marginTop: "10px",
    },
    headers: {
        height: "32px",
        paddingTop: "8px",
        color: "#000"
    },
    bodyTitle: {
        height: "40px",
        width: "100%",
        maxWidth: "100%",
        display: "inline-flex",
        flexDirection: "row",
        backgroundColor: "#808080",
        boxSizing: "border-box",
        justifyContent: "space-between",
        marginTop: "30px",
    },
    bodyTitleTitle: {
        display: "inline-block",
        color: "#fff",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "11px 0 0px 0px",
        marginTop: "1px",
    },
    shifts: {
        display: "inline-flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "36px",
        justifyContent: "space-between",
    },
    day: {
        display: "flex",
        flexDirection: "row",
        minHeight: "36px",
        height: "auto",
        margin: "auto",
    },
    shift: {
        display: "inline-flex",
        flex: 6,
    },
    dayNumber: {
        flex: 2,
        display: "flex",
        flexDirection: "row",
        minHeight: "36px",
        height: "auto",
        margin: "auto",
    },
    date: {
        flex: 4,
    },
    shift: {
        flex: 22,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    qty: {
        flex: 1,
        width: "100%",
        display: "flex",
    },
    contractor: {
        flex: 17,
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    position: {
        flex: 4,
        width: "100%",
        display: "flex",
    },
    name: {
        flex: 8,
        width: "100%",
        display: "flex",
    },
    time: {
        flex: 8,
        width: "100%",
        display: "flex",
    },
    hrs: {
        flex: 2,
        width: "100%",
        display: "flex",
    },
    hasBorder: {
        borderTopWidth: 1,
    },
    bumper: {
        width: "100%",
        maxWidth: "100%",
        height: "8px",
        backgroundColor: "#808080",
    },
    bodyShiftContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
    },
    dayContainerData: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bodyDayContainer: {
        height: "auto",
        width: "100%",
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
    },
    bodyDay: {
        display: "flex",
        margin: "auto",
    },
    bodyDateContainer: {
        flex: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
    },
    bodyDate: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        margin: "auto",
    },
    bodyShiftsContainer: {
        width: "100%",
        maxWidth: "100%",
        flex: 22,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
    },
    bodyShiftContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        minHeight: "36px",
        display: "flex",
        flexDirection: "row",
    },
    bodyQtyContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        alignItems: "center",
    },
    bodyQty: {
        width: "100%",
        flex: 1,
        maxHeight: "25px",
        maxWidth: "100%",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
    bodyContractorsContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        minHeight: "36px",
        flex: 17,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        alignItems: "center",
    },
    bodyContractorContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        minHeight: "36px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        color: "#000",
        alignItems: "center",
    },
    bodyContractor: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
    },
    bodyPositionContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        flex: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        minHeight: "36px",
        alignItems: "center",
    },
    bodyPosition: {
        width: "100%",
        flex: 1,
        maxHeight: "25px",
        maxWidth: "100%",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
    bodyNameContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        flex: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "36px",
        color: "#000",
        alignItems: "center",
    },
    bodyName: {
        width: "100%",
        flex: 1,
        maxHeight: "25px",
        maxWidth: "100%",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
    bodyTimeContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        flex: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        minHeight: "36px",
        alignItems: "center",
    },
    bodyTime: {
        width: "100%",
        flex: 1,
        maxHeight: "25px",
        maxWidth: "100%",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
    bodyHrsContainer: {
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        flex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        minHeight: "36px",
        alignItems: "center",
    },
    bodyHrs: {
        width: "100%",
        flex: 1,
        maxHeight: "25px",
        maxWidth: "100%",
        color: "#000",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
    },
});

const SchedulePDF = ({ days, companyName, scheduleNumber, venueName, venueStreet, venueCity, venueState, venueZip }) => {

    const formatTime = time => {
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
        formatTime = formatTime.join(":");
        formatTime = formatTime.concat(meridian);
        return formatTime;
    }

    console.count("This is the schedulePDF: ", companyName);

    const buildContractors = (contractors) => {
        return contractors.map((contractor, index) => {
            return (
                <View style={styles.bodyContractor} >
                    <View style={[styles.bodyPositionContainer]} >
                        <Text style={[styles.bodyPosition]} >{contractor.contractorPosition}</Text>
                    </View>
                    <View style={[styles.bodyNameContainer ]} >
                        <Text style={[styles.bodyName]} >{contractor.contractorName}</Text>
                    </View>
                    <View style={[styles.bodyTimeContainer]} >
                        <Text style={[styles.bodyTime]} >{`${formatTime(contractor.contractorTimeIn)} - ${formatTime(contractor.contractorTimeOut)}`}</Text>
                    </View>
                    <View style={[styles.bodyHrsContainer ]} >
                        <Text style={[styles.bodyHrs]} >{`${parseInt(contractor.contractorTimeOut.slice(0, 2)) - parseInt(contractor.contractorTimeIn.slice(0, 2))}`}</Text>
                    </View>
                </View>
            );
        });
    };

    const buildShifts = (day) => {
        return day.shifts.map((shift, index) => {
            let contractorQty = shift.contractors.length;
            if ( contractorQty === 0 ) {
                contractorQty = 1;
            }
            console.log(contractorQty, "contractorQty");
            if (index === 0) {
                return (
                    <View style={[styles.bodyShiftContainer, {height: `${contractorQty * 36}px`, } ]} >
                        <View style={[styles.bodyQtyContainer, ]} >
                            <Text style={styles.bodyQty} >{contractorQty}</Text>
                        </View>
                        <View style={[styles.bodyContractorsContainer, ]} >
                        {
                            buildContractors(shift.contractors)
                        }
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={[styles.bodyShiftContainer, styles.hasBorder,  {height: `${contractorQty * 36}px`, } ]} >
                         <View style={[styles.bodyQtyContainer, ]} >
                            <Text style={styles.bodyQty} >{contractorQty}</Text>
                        </View>
                        <View style={[styles.bodyContractorsContainer, ]} >
                        {
                            buildContractors(shift.contractors)
                        }
                        </View>
                    </View>
                );
            };
        });
    };

    const formatDate = date => {
        //format time from mm/dd/yyyy to mm/dd/yy
        let formatTime = date.split("/");
        let year = formatTime[2].slice(2, 4);
        formatTime[2] = year;
        formatTime = formatTime.join("/");
        return formatTime;
    };

    const buildDays = () => {
        return days.map((day, index) => {
            let totalAmountOfContractor = day.shifts.reduce(
                (previousValue, shift) => {
                    let contractorQty = 0;
                    if (shift.contractors.length === 0) {
                        contractorQty = 1;
                    } else {
                        contractorQty = shift.contractors.length;
                    }
                    return (previousValue + contractorQty);
                },
                0
            );

            return (
                <View style={styles.dayContainer} wrap={false} >
                    <View style={[styles.dayContainerData, {height: `${36 * totalAmountOfContractor}`,}]} >
                        <View style={[styles.bodyDayContainer]} >
                            <Text style={styles.bodyDay} >{index+1}</Text>
                        </View>
                        <View style={[styles.bodyDateContainer]} >
                            <Text style={styles.bodyDate} >{formatDate(day.date)}</Text>
                        </View>
                        {/* Flex Direction: Column */}
                        <View style={[styles.bodyShiftsContainer]} >
                            {
                                buildShifts(day)
                            }
                        </View>
                    </View>
                    <View style={styles.bumper} >
                    </View>
                </View>
            )
        })
    }

    return (
        <Document>
            <Page size="A4" style={styles.page} orientation="landscape" >
                {/* Header */}
                <View style={styles.section}>
                    <Text style={styles.headerTitle} >{companyName}</Text>
                    <Text style={styles.headers} >{`#2222_${scheduleNumber}`}</Text>
                    <Text style={styles.headers} >{venueName}</Text>
                    <Text style={styles.headers} >{venueStreet}</Text>
                    <Text style={styles.headers} >{venueCity}</Text>
                </View>
                {/* Titles */}
                <View style={styles.bodyTitle} >
                    <Text style={[styles.bodyTitleTitle, styles.dayNumber]} >Day</Text>
                    <Text style={[styles.bodyTitleTitle, styles.date]} >Date</Text>
                    <View style={styles.shift} >
                        <Text style={[styles.bodyTitleTitle, styles.qty, ]} >Qty</Text>
                        <View style={styles.contractor} >
                            <Text style={[styles.position, styles.bodyTitleTitle, ]} >Position</Text>
                            <Text style={[styles.name,styles.bodyTitleTitle, ]} >Contractor</Text>
                            <Text style={[styles.time, styles.bodyTitleTitle, ]} >Time</Text>
                            <Text style={[styles.hrs, styles.bodyTitleTitle, ]} >Hrs</Text>
                        </View>
                    </View>
                </View>
                {/* Body */}
                    {
                        buildDays()
                    }
            </Page>
        </Document>
    );
};

export default SchedulePDF;