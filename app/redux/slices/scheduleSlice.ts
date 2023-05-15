import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getCurrentDateTimeInAmericanFormat, getCurrentDateInAmericanFormat, convertMilitaryTimeToStandardTime } from "../../../utils/jsUtils/utils";

import { Day, Shift, Contractor, ScheduleState, Company, Venue, Position } from '../../types/types';

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


const initialState: ScheduleState = {
    scheduleData: {
        scheduleNumber: 1,
        company: tempInitialState.company,
        venue: tempInitialState.venue,
        days: tempInitialState.days,
        createdAt: `${getCurrentDateTimeInAmericanFormat()}`,
        updatedAt: `${getCurrentDateTimeInAmericanFormat()}`
    },
    current: {
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
        setScheduleData: (state, action: PayloadAction<ScheduleState>) => {
            state.scheduleData = action.payload.scheduleData;
        },
        setCurrent: (state, action: PayloadAction<ScheduleState>) => {
            state.current = action.payload.current;
        },
        setCurrentDay: (state, action: PayloadAction<number>) => {
            state.current.day = action.payload;
        },
        setCurrentShift: (state, action: PayloadAction<number>) => {
            state.current.shift = action.payload;
        },
        setCurrentContractor: (state, action: PayloadAction<number>) => {
            state.current.contractor = action.payload;
        },
        setCurrentDate: (state, action: PayloadAction<string>) => {
            state.current.date = action.payload;
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
            const tempShifts: Shift[] = [...state.scheduleData.days[state.current.day].shifts];
            const newTotal = action.payload - state.scheduleData.days[state.current.day].shifts.length;
            if (newTotal > 0) {
                for (let i = 0; i < newTotal; i++) {
                    tempShifts.push({
                        shiftNumber: (state.scheduleData.days[state.current.day].shifts.length + i + 1),
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
                state.scheduleData.days[state.current.day].shifts = tempShifts;
            } else if (newTotal < 0) {
                state.scheduleData.days[state.current.day].shifts = tempShifts.slice(0, action.payload);
            } else if (newTotal === 0) {
                return;
            }
        },
        setShift: (state, action: PayloadAction<Shift>) => {
            state.scheduleData.days[state.current.day].shifts[action.payload.shiftNumber] = action.payload;
        },
        setContractors: (state, action: PayloadAction<number>) => {
            const tempContractors: Contractor[] = [...state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors];
            const newTotal = action.payload - state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors.length;
            if (newTotal > 0) {
                for (let i = 0; i < newTotal; i++) {
                    tempContractors.push({
                        contractorId: (state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors.length + i + 1),
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
                state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors = tempContractors;
            } else if (newTotal < 0) {
                state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors = tempContractors.slice(0, action.payload);
            } else if (newTotal === 0) {
                return;
            }
        },
        setContractor: (state, action: PayloadAction<Contractor>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[action.payload.contractorId] = action.payload;
        },
        setContractorName: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorName = action.payload;
        },
        setContractorPosition: (state, action: PayloadAction<Position>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorPosition = action.payload;
        },
        setContractorRate: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorRate = action.payload;
        },
        setContractorTimeIn: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorTimeIn = action.payload;
        },
        setContractorTimeOut: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorTimeOut = action.payload;
        },
        setContractorHours: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorHours = action.payload;
        },
        setContractorTotal: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorTotal = action.payload;
        },
        setContractorOvertime: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorOvertime = action.payload;
        },
        setWalkAway: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].walkaway = action.payload;
        },
        setShiftNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].shiftNumber = action.payload;
        },
        setShiftStartTime: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].startTime = convertMilitaryTimeToStandardTime(action.payload);
        },
        setShiftEndTime: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].endTime = convertMilitaryTimeToStandardTime(action.payload);
        },
        setShiftTotalHours: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].totalHours = action.payload;
        },
        setDayNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].dayNumber = action.payload;
        },
        setDayDate: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].date = getCurrentDateInAmericanFormat(action.payload);
        },
        setCurrentPhase: (state, action: PayloadAction<number>) => {
            state.current.phase = action.payload;
        },
        setShiftHalfDay: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].halfDay = action.payload;
        },
        setShiftWalkaway: (state, action: PayloadAction<boolean>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].walkaway = action.payload;
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
        }

    },
});

export const {
    setScheduleData, setCurrentDay, setCurrentShift, setCurrentContractor, setCurrentDate, setCreatedAt, setUpdatedAt, setScheduleNumber, setcompany, setVenue, setDays, setDay, setShifts, setShift, setContractors, setContractor, setContractorName, setContractorPosition, setContractorRate, setContractorTimeIn, setContractorTimeOut, setContractorHours, setContractorTotal, setContractorOvertime, setWalkAway, setShiftNumber, setShiftStartTime, setShiftEndTime, setShiftTotalHours, setDayNumber, setDayDate, setCurrentPhase, setShiftHalfDay, setShiftWalkaway, setCompanyName, setCompanyAddress, setCompanyAddress2, setCompanyCity, setCompanyState, setCompanyZip,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;