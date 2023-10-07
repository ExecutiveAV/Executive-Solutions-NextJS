import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getCurrentDateTimeInAmericanFormat, getCurrentDateInAmericanFormat, convertMilitaryTimeToStandardTime } from "../../../utils/jsUtils/utils";

import { ScheduleData, Day, Shift, Contractor, Schedule, Company, Venue, Position } from '../../types/types';

const tempInitialState = {
    days: [
    {
      dayNumber: 1,
      date: '',
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


const initialState: Schedule = {
    scheduleData: {
        scheduleNumber: 1,
        company: tempInitialState.company,
        venue: tempInitialState.venue,
        days: tempInitialState.days,
        createdAt: `${getCurrentDateTimeInAmericanFormat()}`,
        updatedAt: `${getCurrentDateTimeInAmericanFormat()}`
    },
    scheduleCurrent: {
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
            state.scheduleData = action.payload;
        },
        setScheduleCurrent: (state, action: PayloadAction<Schedule>) => {
            state.scheduleCurrent = action.payload.scheduleCurrent;
        },
        setScheduleCurrentDay: (state, action: PayloadAction<number>) => {
            state.scheduleCurrent.day = action.payload;
        },
        setScheduleCurrentShift: (state, action: PayloadAction<number>) => {
            state.scheduleCurrent.shift = action.payload;
        },
        setScheduleCurrentContractor: (state, action: PayloadAction<number>) => {
            state.scheduleCurrent.contractor = action.payload;
        },
        setScheduleCurrentDate: (state, action: PayloadAction<string>) => {
            state.scheduleCurrent.date = action.payload;
        },
        setCreatedAt: (state, action: PayloadAction<string>) => {
            state.scheduleData.createdAt = action.payload;
        },
        setUpdatedAt: (state, action: PayloadAction<string>) => {
            state.scheduleData.updatedAt = action.payload;
        },
        setScheduleNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.scheduleNumber = action.payload;
        },
        setcompany: (state, action: PayloadAction<Company>) => {
            state.scheduleData.company = action.payload;
        },
        setVenue: (state, action: PayloadAction<Venue>) => {
            state.scheduleData.venue = action.payload;
        },
        setVenueName: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueName = action.payload;
        },
        setVenueAddress: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueAddress = action.payload;
        },
        setVenueAddress2: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueAddress2 = action.payload;
        },
        setVenueCity: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueCity = action.payload;
        },
        setVenueState: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueState = action.payload;
        },
        setVenueZip: (state, action: PayloadAction<string>) => {
            state.scheduleData.venue.venueZip = action.payload;
        },
        setDays: (state, action: PayloadAction<number>) => {
            const tempDays: Day[] = [...state.scheduleData.days];
            const newTotal = action.payload - state.scheduleData.days.length;
            if (newTotal > 0) {
                for (let i = 0; i < newTotal; i++) {
                    tempDays.push({
                        dayNumber: (state.scheduleData.days.length + i + 1),
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
            state.scheduleData.days = tempDays;
            } else if (newTotal < 0) {
                state.scheduleData.days = tempDays.slice(0, action.payload);
            } else if (newTotal === 0) {
                return;
            }
        },
        setDay: (state, action: PayloadAction<Day>) => {
            state.scheduleData.days[action.payload.dayNumber] = action.payload;
        },
        setShifts: (state, action: PayloadAction<number>) => {
            const tempShifts: Shift[] = [...state.scheduleData.days[state.scheduleCurrent.day].shifts];
            const newTotal = action.payload - state.scheduleData.days[state.scheduleCurrent.day].shifts.length;
            if (newTotal > 0) {
                for (let i = 0; i < newTotal; i++) {
                    tempShifts.push({
                        shiftNumber: (state.scheduleData.days[state.scheduleCurrent.day].shifts.length + i + 1),
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
                state.scheduleData.days[state.scheduleCurrent.day].shifts = tempShifts;
            } else if (newTotal < 0) {
                state.scheduleData.days[state.scheduleCurrent.day].shifts = tempShifts.slice(0, action.payload);
            } else if (newTotal === 0) {
                return;
            }
        },
        setShift: (state, action: PayloadAction<Shift>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[action.payload.shiftNumber] = action.payload;
        },
        setContractors: (state, action: PayloadAction<number>) => {
            const tempContractors: Contractor[] = [...state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors];
            const newTotal = action.payload - state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors.length;
            if (newTotal > 0) {
                for (let i = 0; i < newTotal; i++) {
                    tempContractors.push({
                        contractorId: (state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors.length + i + 1),
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
                state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors = tempContractors;
            } else if (newTotal < 0) {
                state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors = tempContractors.slice(0, action.payload);
            } else if (newTotal === 0) {
                return;
            }
        },
        setContractor: (state, action: PayloadAction<Contractor>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[action.payload.contractorId] = action.payload;
        },
        setContractorName: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorName = action.payload;
        },
        setContractorPosition: (state, action: PayloadAction<Position>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorPosition = action.payload;
        },
        setContractorRate: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorRate = action.payload;
        },
        setContractorTimeIn: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorTimeIn = action.payload;
        },
        setContractorTimeOut: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorTimeOut = action.payload;
        },
        setContractorHours: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorHours = action.payload;
        },
        setContractorTotal: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorTotal = action.payload;
        },
        setContractorOvertime: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].contractorOvertime = action.payload;
        },
        setWalkAway: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].contractors[state.scheduleCurrent.contractor].walkaway = action.payload;
        },
        setShiftNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].shiftNumber = action.payload;
        },
        setShiftStartTime: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].startTime = convertMilitaryTimeToStandardTime(action.payload);
        },
        setShiftEndTime: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].endTime = convertMilitaryTimeToStandardTime(action.payload);
        },
        setShiftTotalHours: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].totalHours = action.payload;
        },
        setDayNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.scheduleCurrent.day].dayNumber = action.payload;
        },
        setDayDate: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.scheduleCurrent.day].date = getCurrentDateInAmericanFormat(action.payload);
        },
        setScheduleCurrentPhase: (state, action: PayloadAction<number>) => {
            state.scheduleCurrent.phase = action.payload;
        },
        setShiftHalfDay: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].halfDay = action.payload;
        },
        setShiftWalkaway: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.scheduleCurrent.day].shifts[state.scheduleCurrent.shift].walkaway = action.payload;
        },
        setCompany: (state, action: PayloadAction<Company>) => {
            state.scheduleData.company = action.payload;
        },
        setCompanyName: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyName = action.payload;
        },
        setCompanyAddress: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyAddress = action.payload;
        },
        setCompanyAddress2: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyAddress2 = action.payload;
        },
        setCompanyCity: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyCity = action.payload;
        },
        setCompanyState: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyState = action.payload;
        },
        setCompanyZip: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyZip = action.payload;
        },
        setCompanyPOC: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyPOC = action.payload;
        },
        setCompanyInitials: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyInitials = action.payload;
        },
        setCompanyEmail: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyEmail = action.payload;
        },
        setCompanyPhone: (state, action: PayloadAction<string>) => {
            state.scheduleData.company.companyPhone = action.payload;
        },   
    },
});

export const {
    setScheduleData, setScheduleCurrent, setScheduleCurrentDay, setScheduleCurrentShift, setScheduleCurrentContractor, setScheduleCurrentDate, setCreatedAt, setUpdatedAt, setScheduleNumber, setcompany, setVenue, setDays, setDay, setShifts, setShift, setContractors, setContractor, setContractorName, setContractorPosition, setContractorRate, setContractorTimeIn, setContractorTimeOut, setContractorHours, setContractorTotal, setContractorOvertime, setWalkAway, setShiftNumber, setShiftStartTime, setShiftEndTime, setShiftTotalHours, setDayNumber, setDayDate, setScheduleCurrentPhase, setShiftHalfDay, setShiftWalkaway, setCompanyName, setCompanyAddress, setCompanyAddress2, setCompanyCity, setCompanyState, setCompanyZip, setCompanyPOC, setCompanyInitials, setCompanyEmail, setCompanyPhone
} = scheduleSlice.actions;

export default scheduleSlice.reducer;