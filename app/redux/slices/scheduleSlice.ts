import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Day, Shift, Contractor, ScheduleState } from '../../types/types';

function getCurrentDateTimeInAmericanFormat() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = ((hours + 11) % 12 + 1).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    return `${month}/${day}/${year} ${formattedHours}:${minutes} ${ampm}`;
}

const initialState: ScheduleState = {
    scheduleData: {
        scheduleNumber: 0,
        clientCompany: "",
        showVenue: "",
        days: [],
        createdAt: `${getCurrentDateTimeInAmericanFormat()}`,
        updatedAt: `${getCurrentDateTimeInAmericanFormat()}`
    },
    current: {
        day: 0,
        shift: 0,
        contractor: 0,
        date: ""
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
        setClientCompany: (state, action: PayloadAction<string>) => {
            state.scheduleData.clientCompany = action.payload;
        },
        setShowVenue: (state, action: PayloadAction<string>) => {
            state.scheduleData.showVenue = action.payload;
        },
        setDays: (state, action: PayloadAction<Day[]>) => {
            state.scheduleData.days = action.payload;
        },
        setDay: (state, action: PayloadAction<Day>) => {
            state.scheduleData.days[action.payload.dayNumber] = action.payload;
        },
        setShifts: (state, action: PayloadAction<Shift[]>) => {
            state.scheduleData.days[state.current.day].shifts = action.payload;
        },
        setShift: (state, action: PayloadAction<Shift>) => {
            state.scheduleData.days[state.current.day].shifts[action.payload.shiftNumber] = action.payload;
        },
        setContractors: (state, action: PayloadAction<Contractor[]>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors = action.payload;
        },
        setContractor: (state, action: PayloadAction<Contractor>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[action.payload.contractorId] = action.payload;
        },
        setContractorName: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].contractors[state.current.contractor].contractorName = action.payload;
        },
        setContractorPosition: (state, action: PayloadAction<string>) => {
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
            state.scheduleData.days[state.current.day].shifts[state.current.shift].startTime = action.payload;
        },
        setShiftEndTime: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].endTime = action.payload;
        },
        setShiftTotalHours: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].shifts[state.current.shift].totalHours = action.payload;
        },
        setDayNumber: (state, action: PayloadAction<number>) => {
            state.scheduleData.days[state.current.day].dayNumber = action.payload;
        },
        setDayDate: (state, action: PayloadAction<string>) => {
            state.scheduleData.days[state.current.day].date = action.payload;
        },
    },
});
export const {
    setScheduleData,
    setCurrent,
    setCurrentDay,
    setCurrentShift,
    setCurrentContractor,
    setCurrentDate,
    setCreatedAt,
    setUpdatedAt,
    setScheduleNumber,
    setClientCompany,
    setShowVenue,
    setDays,
    setDay,
    setShifts,
    setShift,
    setContractors,
    setContractor,
    setContractorName,
    setContractorPosition,
    setContractorRate,
    setContractorTimeIn,
    setContractorTimeOut,
    setContractorHours,
    setContractorTotal,
    setContractorOvertime,
    setWalkAway,
    setShiftNumber,
    setShiftStartTime,
    setShiftEndTime,
    setShiftTotalHours,
    setDayNumber,
    setDayDate,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;