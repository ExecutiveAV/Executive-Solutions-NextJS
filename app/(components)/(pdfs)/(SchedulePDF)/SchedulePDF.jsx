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
        padding: "0px 42px 0px 42px",
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
    },
    bodyTitleTitle: {
        display: "inline-block",
        color: "#fff",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "11px 0 0px 0px",
        flex: 1,
        marginTop: "1px",
    },
    shifts: {
        display: "inline-flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "36px",
    },
    shiftGroup: {
        display: "flex",
        flexDirection: "column",
        flex: 6,
        minHeight: "36px",
    },
    category: {
        textAlign: "center",
        width: "100%",
        flex: 1,
        minHeight: "36px",
        height: "100%",
        display: "flex",
    },
    day: {
        display: "flex",
        flexDirection: "row",
        minHeight: "36px",
        width: "100%",
        height: "auto"
    },
    dayGroup: {
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "36px",
        height: "auto",
    },
    contractor: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        minHeight: "36px",
        
    },
    shift: {
        display: "inline-flex",
        flex: 6,
    },
    dayNumber: {
        flex: 1,
    },
    date: {
        flex: 1,
    },
    all: {
        minWidth: "474px",
        width: "100%",
        flex: 6
    },
    allTitle: {
        display: "inline-flex",
        flexDirection: "row",
        flex: 6,
    },
    contractorsTitle: {
        flex: 6,
        display: "flex",
        flexDirection: "row"
    },
    contractorSpacing: {
        flex: 2,
        display: "inline-block",
    },
    categoryField: {
        fontSize: "18px",
        minHeight: "36px",
        padding: "9px 0 0px 0px",
        width: "100%",
        height: "36px",
        margin: "auto"
    },
    hasBorder: {
        borderTopWidth: 1,
    },
    bumper: {
        width: "100%",
        maxWidth: "100%",
        height: "8px",
        backgroundColor: "#808080",
    }
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
                <View style={styles.tech} >
                    <View style={[styles.category]} >
                        <Text style={[styles.categoryField]} >{contractor.contractorPosition}</Text>
                    </View>
                    <View style={[styles.category, styles.techSpacing ]} >
                        <Text style={[styles.categoryField]} >{contractor.contractorName}</Text>
                    </View>
                    <View style={[styles.category, styles.techSpacing ]} >
                        <Text style={[styles.categoryField]} >{`${formatTime(contractor.contractorTimeIn)} - ${formatTime(contractor.contractorTimeOut)}`}</Text>
                    </View>
                    <View style={[styles.category ]} >
                        <Text style={[styles.categoryField]} >{`${parseInt(contractor.contractorTimeOut.slice(0, 2)) - parseInt(contractor.contractorTimeIn.slice(0, 2))}`}</Text>
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
            if (index === 0) {
                return (
                    <View style={[styles.shifts, {height: `${contractorQty * 36}px`, } ]} >
                        <View style={[styles.category, ]} >
                            <Text style={styles.categoryField} >{shift.contractors.length}</Text>
                        </View>
                        <View style={[styles.shift, ]} >
                            {
                                buildContractors(shift.contractors)
                            }
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={[styles.shifts, styles.hasBorder,  {height: `${contractorQty * 36}px`, } ]} >
                        <View style={[styles.category ]} >
                            <Text style={[styles.categoryField]} >{shift.contractors.length}</Text>
                        </View>
                        <View style={[styles.shift, ]} >
                            {
                                buildContractors(shift.contractors)
                            }
                        </View>
                    </View>
                );
            };
        });
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
                <View style={styles.dayGroup} wrap={false} >
                    <View style={[styles.day, {height: `${36 * totalAmountOfContractor}`,}]} >
                        <View style={[styles.category, styles.dayNumber]} >
                            <Text style={styles.categoryField} >{index+1}</Text>
                        </View>
                        <View style={[styles.category, styles.date]} >
                            <Text style={styles.categoryField} >{new Date(day.date.replace(/-/g, '/')).toLocaleDateString('en-us')}</Text>
                        </View>
                        <View style={styles.shiftGroup} >
                        {/* Flex Direction: Column */}
                            {/* {
                                buildShifts(day)
                            } */}
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
                    <View style={styles.allTitle} >
                        <Text style={[styles.bodyTitleTitle, ]} >Qty</Text>
                        <View style={styles.ContractorsTitle} >
                            <Text style={[styles.bodyTitleTitle, ]} >Position</Text>
                            <Text style={[styles.bodyTitleTitle, styles.ContractorSpacing ]} >Contractor</Text>
                            <Text style={[styles.bodyTitleTitle, styles.ContractorSpacing ]} >Time</Text>
                            <Text style={[styles.bodyTitleTitle, ]} >Hrs</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <Text >{companyName}</Text>
                </View>
                {/* Body */}
            </Page>
        </Document>
    );
};

export default SchedulePDF;