import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getCurrentDateTimeInAmericanFormat, getCurrentDateInAmericanFormat, convertMilitaryTimeToStandardTime } from "../../../../utils/jsUtils/utils";

import { ScheduleData, ScheduleCurrent, Day, Shift, Contractor, Document, Company, Venue, Position } from '../../types/types';

const tempInitialState = {
    days: [
    {
        dayNumber: 1,
        date: '',
        shifts: 
        [{
            shiftNumber: 1,
            startTime: '08:00',
            endTime: '18:00',
            halfDay: false,
            walkaway: false,
            contractors: 
            [{
                contractorId: 1,
                contractorName: '',
                contractorPosition: {
                    positionName: '',
                    positionRate: 0,
                },
                contractorRate: 0,
                contractorTimeIn: '08:00',
                contractorTimeOut: '18:00',
                contractorHours: 0,
                contractorTotal: 0,
                contractorOvertime: 0,
                walkaway: false
                
            }],
            totalHours: 0
        }]
    }
  ],
    company: {
        companyName: '',
        companyPOC: '',
        companyEmail: '',
        companyInitials: '',
        companyPhone: '',
        companyAddress: '',
        companyAddress2: '',
        companyCity: '',
        companyState: '',
        companyZip: ''
    },
    venue: {
        venueName: '',
        venueAddress: '',
        venueAddress2: '',
        venueCity: '',
        venueState: '',
        venueZip: ''
    }
}


const initialState: Document = {
    documentData: {
        type: "schedule",
        documentNumber: 1,
        company: tempInitialState.company,
        venue: tempInitialState.venue,
        days: tempInitialState.days,
        createdAt: `${getCurrentDateTimeInAmericanFormat()}`,
        updatedAt: `${getCurrentDateTimeInAmericanFormat()}`
    },
    documentCurrent: {
        day: 0,
        shift: 0,
        contractor: 0,
        date: "",
        phase: 0,
    },
};

export const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        setScheduleData: (state, action: PayloadAction<ScheduleData>) => {
            state.documentData = action.payload;
        },
        setScheduleCurrent: (state, action: PayloadAction<Document>) => {
            state.documentCurrent = action.payload.documentCurrent;
        },
        setScheduleCurrentDay: (state, action: PayloadAction<number>) => {
            state.documentCurrent.day = action.payload;
        },
        setScheduleCurrentShift: (state, action: PayloadAction<number>) => {
            if ('shift' in state.documentCurrent) {
                state.documentCurrent.shift = action.payload;
            } else {
                throw new Error('Invalid operation: Shift does not exist on InvoiceCurrent');
            }
        },
        setScheduleCurrentContractor: (state, action: PayloadAction<number>) => {
            state.documentCurrent.contractor = action.payload;
        },
        setScheduleCurrentDate: (state, action: PayloadAction<string>) => {
            if ('date' in state.documentCurrent) {
                state.documentCurrent.date = action.payload;
            } else {
                throw new Error('Invalid operation: Date does not exist on InvoiceCurrent');
            }
        },
        setScheduleUpdatedAt: (state, action: PayloadAction<string>) => {
            if ('updatedAt' in state.documentData) {
                state.documentData.updatedAt = action.payload;
            } else {
                throw new Error('Invalid operation: updatedAt does not exist on InvoiceData');
            }
        },
        setScheduleNumber: (state, action: PayloadAction<number>) => {
            if ('documentNumber' in state.documentData) {
                state.documentData.documentNumber = action.payload;
            } else {
                throw new Error('Invalid operation: documentNumber does not exist on InvoiceData');
            }
        },
        setScheduleVenue: (state, action: PayloadAction<Venue>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueName: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueName = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueAddress: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueAddress = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueAddress2: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueAddress2 = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueCity: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueCity = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueState: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueState = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleVenueZip: (state, action: PayloadAction<string>) => {
            if ('venue' in state.documentData) {
                state.documentData.venue.venueZip = action.payload;
            } else {
                throw new Error('Invalid operation: venue does not exist on InvoiceData');
            }
        },
        setScheduleDays: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData) {
                const tempDays: Day[] = [...state.documentData.days];
                const newTotal = action.payload - state.documentData.days.length;
                if (newTotal > 0) {
                    for (let i = 0; i < newTotal; i++) {
                        tempDays.push({
                            dayNumber: (state.documentData.days.length + i + 1),
                            date: "",
                            shifts: [
                                {
                                  shiftNumber: 1,
                                  startTime: '08:00',
                                  endTime: '18:00',
                                  halfDay: false,
                                  walkaway: false,
                                  contractors: [
                                    {
                                      contractorId: 1,
                                      contractorName: '',
                                      contractorPosition: {
                                        positionName: '',
                                        positionRate: 0,
                                      },
                                      contractorRate: 0,
                                      contractorTimeIn: '08:00',
                                      contractorTimeOut: '18:00',
                                      contractorHours: 0,
                                      contractorTotal: 0,
                                      contractorOvertime: 0,
                                      walkaway: false
                                    }
                                  ],
                                  totalHours: 0
                                }
                              ]
                        });
                    }
                state.documentData.days = tempDays;
                } else if (newTotal < 0) {
                    state.documentData.days = tempDays.slice(0, action.payload);
                } else if (newTotal === 0) {
                    return;
                }
            } else {
                throw new Error('Invalid operation: days does not exist on InvoiceData');
            }
        },
        setScheduleDay: (state, action: PayloadAction<Day>) => {
            if ('days' in state.documentData) {
                state.documentData.days[action.payload.dayNumber] = action.payload;
            } else {
                throw new Error('Invalid operation: days does not exist on InvoiceData');
            }
        },
        setScheduleShifts: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                const tempShifts: Shift[] = [...state.documentData.days[state.documentCurrent.day].shifts];
                const newTotal = action.payload - state.documentData.days[state.documentCurrent.day].shifts.length;
                if (newTotal > 0) {
                    for (let i = 0; i < newTotal; i++) {
                        tempShifts.push({
                            shiftNumber: (state.documentData.days[state.documentCurrent.day].shifts.length + i + 1),
                            startTime: "08:00",
                            endTime: "18:00",
                            halfDay: false,
                            walkaway: false,
                            contractors: [
                                {
                                  contractorId: 1,
                                  contractorName: '',
                                  contractorPosition: {
                                    positionName: '',
                                    positionRate: 0,
                                  },
                                  contractorRate: 0,
                                  contractorTimeIn: '08:00',
                                  contractorTimeOut: '18:00',
                                  contractorHours: 0,
                                  contractorTotal: 0,
                                  contractorOvertime: 0,
                                  walkaway: false
                                }
                              ],
                            totalHours: 0,
                        });
                    }
                    state.documentData.days[state.documentCurrent.day].shifts = tempShifts;
                } else if (newTotal < 0) {
                    state.documentData.days[state.documentCurrent.day].shifts = tempShifts.slice(0, action.payload);
                } else if (newTotal === 0) {
                    return;
                }
            } else {
                throw new Error('Invalid operation: days or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleShift: (state, action: PayloadAction<Shift>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[action.payload.shiftNumber] = action.payload;
            } else {
                throw new Error('Invalid operation: days or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractors: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                const tempContractors: Contractor[] = [...state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors];
                const newTotal = action.payload - state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors.length;
                if (newTotal > 0) {
                    for (let i = 0; i < newTotal; i++) {
                        tempContractors.push({
                            contractorId: (state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors.length + i + 1),
                            contractorName: "",
                            contractorPosition: {
                                positionName: "",
                                positionRate: 0,
                            },
                            contractorRate: 0,
                            contractorTimeIn: "08:00",
                            contractorTimeOut: "18:00",
                            contractorHours: 0,
                            contractorTotal: 0,
                            contractorOvertime: 0,
                            walkaway: false
                        });
                    }
                    state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors = tempContractors;
                } else if (newTotal < 0) {
                    state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors = tempContractors.slice(0, action.payload);
                } else if (newTotal === 0) {
                    return;
                }
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractor: ( state: Document, action: PayloadAction<Contractor>) => {
            const documentData: ScheduleData = state.documentData as ScheduleData;
            const documentCurrent: ScheduleCurrent = state.documentCurrent as ScheduleCurrent;
            if (documentData.type === 'schedule') {
                state.documentData.days[documentCurrent.day].shifts[documentCurrent.shift].contractors[action.payload.contractorId] = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorName: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorName = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorPosition: (state, action: PayloadAction<Position>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorPosition = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorRate: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorRate = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorTimeIn: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorTimeIn = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorTimeOut: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorTimeOut = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorHours: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorHours = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setScheduleContractorTotal: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorTotal = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleContractorOvertime: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].contractorOvertime = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleWalkAway: (state, action: PayloadAction<boolean>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].contractors[state.documentCurrent.contractor].walkaway = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleShiftNumber: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].shiftNumber = action.payload;
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleShiftStartTime: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].startTime = convertMilitaryTimeToStandardTime(action.payload);
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleShiftEndTime: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].endTime = convertMilitaryTimeToStandardTime(action.payload);
            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleShiftTotalHours: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent && 'totalHours' in state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift]) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].totalHours = action.payload;
            } else {
                throw new Error('Invalid operation: days, day, shift or totalHours does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleDayNumber: (state, action: PayloadAction<number>) => {
            if ('days' in state.documentData && 'dayNumber' in state.documentData.days[state.documentCurrent.day]) {
                state.documentData.days[state.documentCurrent.day].dayNumber = action.payload;
            } else {
                throw new Error('Invalid operation: days or dayNumber does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleDayDate: (state, action: PayloadAction<string>) => {
            if ('days' in state.documentData && 'date' in state.documentData.days[state.documentCurrent.day]) {
                state.documentData.days[state.documentCurrent.day].date = getCurrentDateInAmericanFormat(action.payload);
            } else {
                throw new Error('Invalid operation: days or date does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleCurrentPhase: (state, action: PayloadAction<number>) => {
            if ('phase' in state.documentCurrent) {
                state.documentCurrent.phase = action.payload;
            } else {
                throw new Error('Invalid operation: phase does not exist on InvoiceCurrent');
            } 
        },
        setScheduleShiftHalfDay: (state, action: PayloadAction<boolean>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].halfDay = action.payload;
            } else {
                throw new Error('Invalid operation: days or halfDay does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleShiftWalkaway: (state, action: PayloadAction<boolean>) => {
            if ('days' in state.documentData && 'shift' in state.documentCurrent) {
                state.documentData.days[state.documentCurrent.day].shifts[state.documentCurrent.shift].walkaway = action.payload;
            } else {
                throw new Error('Invalid operation: days or walkaway does not exist on InvoiceData or InvoiceCurrent');
            } 
        },
        setScheduleCompany: (state, action: PayloadAction<Company>) => {
            if ('company' in state.documentData) {
                state.documentData.company = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyName: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyName = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyPOC: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyPOC = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyEmail: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyEmail = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyInitials: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyInitials = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyPhone: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyPhone = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyAddress: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyAddress = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyAddress2: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyAddress2 = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyCity: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyCity = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyState: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyState = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
        setScheduleCompanyZip: (state, action: PayloadAction<string>) => {
            if ('company' in state.documentData) {
                state.documentData.company.companyZip = action.payload;
            } else {
                throw new Error('Invalid operation: company does not exist on InvoiceData');
            } 
        },
    },
});

export const {
    setScheduleData, setScheduleCurrent, setScheduleCurrentDay, setScheduleCurrentShift, setScheduleCurrentContractor, setScheduleCurrentDate, setScheduleUpdatedAt, setScheduleNumber, setScheduleVenue, setScheduleVenueName, setScheduleVenueAddress, setScheduleVenueAddress2, setScheduleVenueCity, setScheduleVenueState, setScheduleVenueZip, setScheduleDays, setScheduleDay, setScheduleShifts, setScheduleShift, setScheduleContractors, setScheduleContractor, setScheduleContractorName, setScheduleContractorPosition, setScheduleContractorRate, setScheduleContractorTimeIn, setScheduleContractorTimeOut, setScheduleContractorHours, setScheduleContractorTotal, setScheduleContractorOvertime, setScheduleWalkAway, setScheduleShiftNumber, setScheduleShiftStartTime, setScheduleShiftEndTime, setScheduleShiftTotalHours, setScheduleDayNumber, setScheduleDayDate, setScheduleCurrentPhase, setScheduleShiftHalfDay, setScheduleShiftWalkaway, setScheduleCompany, setScheduleCompanyName, setScheduleCompanyPOC, setScheduleCompanyEmail, setScheduleCompanyInitials, setScheduleCompanyPhone, setScheduleCompanyAddress, setScheduleCompanyAddress2, setScheduleCompanyCity, setScheduleCompanyState, setScheduleCompanyZip
} = scheduleSlice.actions;

export default scheduleSlice.reducer;