import { ScheduleState, ScheduleData, Current } from '../../types/types';

import { createSelector } from 'reselect';
import { RootState } from '../store/store';

const scheduleSelector = (state:RootState) => state.schedule;

export const scheduleDataSelector = createSelector(
  scheduleSelector,
  (schedule:ScheduleState) => schedule.scheduleData
);
const currentSelector = createSelector(
  scheduleSelector,
  (schedule:ScheduleState) => schedule.current
);

// Selectors for the schedule data

export const scheduleNumberSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.scheduleNumber
);

export const companySelector = createSelector(
    scheduleDataSelector,
    (scheduleData:ScheduleData) => scheduleData.company
);

export const venueSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.venue
);

export const daysSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.days
);

export const createdAtSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.createdAt
);

export const updatedAtSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.updatedAt
);

export const dayNumberSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].dayNumber
);

export const dateSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].date
);

export const shiftsSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts
);

export const shiftSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift]
);

export const shifNumbertSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].shiftNumber
);

export const startTimeSelector = createSelector(
    [scheduleDataSelector, currentSelector],
    (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].startTime
);

export const endTimeSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].endTime
);

export const halfDaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].halfDay
);

export const walkawaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].walkaway
);

export const contractorsSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors
);

export const totalHoursSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].totalHours
);

export const contractorIdSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorId
);

export const contractorNameSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorName
);

export const contractorPositionSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorPosition
);

export const contractorRateSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorRate
);

export const contractorTimeInSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeIn
);

export const contractorTimeOutSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeOut
);

export const contractorHoursSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorHours
);

export const contractorTotalSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTotal
);

export const contractorOvertimeSelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorOvertime
);

export const contractorWalkawaySelector = createSelector(
  [scheduleDataSelector, currentSelector],
  (scheduleData:ScheduleData, current:Current) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].walkaway
);

export const companyNameSelector = createSelector(
  companySelector,
  (company) => company.companyName
);

export const companyAddressSelector = createSelector(
  companySelector,
  (company) => company.companyAddress
);

export const companyEmailSelector = createSelector(
  companySelector,
  (company) => company.companyEmail
);

export const companyPhoneSelector = createSelector(
  companySelector,
  (company) => company.companyPhone
);

export const companyInitialsSelector = createSelector(
  companySelector,
  (company) => company.companyInitials
);

export const companyAddress2Selector = createSelector(
  companySelector,
  (company) => company.companyAddress2
);

export const companyCitySelector = createSelector(
  companySelector,
  (company) => company.companyCity
);

export const companyStateSelector = createSelector(
  companySelector,
  (company) => company.companyState
);

export const companyZipSelector = createSelector(
  companySelector,
  (company) => company.companyZip
);

export const venueNameSelector = createSelector(
  venueSelector,
  (venue) => venue.venueName
);

export const venueAddressSelector = createSelector(
  venueSelector,
  (venue) => venue.venueAddress
);

export const venueAddress2Selector = createSelector(
  venueSelector,
  (venue) => venue.venueAddress2
);

export const venueCitySelector = createSelector(
  venueSelector,
  (venue) => venue.venueCity
);

export const venueStateSelector = createSelector(
  venueSelector,
  (venue) => venue.venueState
);

export const venueZipSelector = createSelector(
  venueSelector,
  (venue) => venue.venueZip
);

// Current selectors for the current day, shift, contractor, and phase

export const currentDaySelector = createSelector(
  currentSelector,
  (current:Current) => current.day
);

export const currentShiftSelector = createSelector(
  currentSelector,
  (current:Current) => current.shift
);

export const currentContractorSelector = createSelector(
  currentSelector,
  (current:Current) => current.contractor
);

export const currentPhaseSelector = createSelector(
  currentSelector,
  (current:Current) => current.phase
);