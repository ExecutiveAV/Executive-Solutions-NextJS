import { createSelector } from 'reselect';

const scheduleDataSelector = (state) => state.schedule.scheduleData;
const currentSelector = (state) => state.schedule.current;

// Selectors for the schedule data

export const scheduleNumberSelector = createSelector(
  scheduleDataSelector,
  (scheduleData) => scheduleData.scheduleNumber
);

export const companySelector = createSelector(
    scheduleDataSelector,
    (scheduleData) => scheduleData.company
);

export const venueSelector = createSelector(
  scheduleDataSelector,
  (scheduleData) => scheduleData.venue
);

export const daysSelector = createSelector(
  scheduleDataSelector,
  (scheduleData) => scheduleData.days
);

export const createdAtSelector = createSelector(
  scheduleDataSelector,
  (scheduleData) => scheduleData.createdAt
);

export const updatedAtSelector = createSelector(
  scheduleDataSelector,
  (scheduleData) => scheduleData.updatedAt
);

export const dayNumberSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].dayNumber
);

export const dateSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].date
);

export const shiftsSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts
);

export const shiftSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift]
);

export const shifNumbertSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].shiftNumber
);

export const startTimeSelector = createSelector(
    [scheduleDataSelector, currentSelector],
    (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].startTime
);

export const endTimeSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].endTime
);

export const halfDaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].halfDay
);

export const walkawaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].walkaway
);

export const contractorsSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors
);

export const totalHoursSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].totalHours
);

export const contractorIdSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorId
);

export const contractorNameSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorName
);

export const contractorPositionSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorPosition
);

export const contractorRateSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorRate
);

export const contractorTimeInSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeIn
);

export const contractorTimeOutSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeOut
);

export const contractorHoursSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorHours
);

export const contractorTotalSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTotal
);

export const contractorOvertimeSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorOvertime
);

export const contractorWalkawaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData, current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].walkaway
);

// Current selectors for the current day, shift, contractor, and phase

export const currentDaySelector = createSelector(
  currentSelector,
  (current) => current.day
);

export const currentShiftSelector = createSelector(
  currentSelector,
  (current) => current.shift
);

export const currentContractorSelector = createSelector(
  currentSelector,
  (current) => current.contractor
);

export const currentPhaseSelector = createSelector(
  currentSelector,
  (current) => current.phase
);