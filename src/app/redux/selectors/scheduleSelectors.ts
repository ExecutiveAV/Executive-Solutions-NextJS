import { Document, ScheduleData, ScheduleCurrent } from '../../types/types';

import { createSelector } from 'reselect';
import { RootState } from '../store/store';

const scheduleSelector = (state:RootState) => state.schedule;

export const scheduleDataSelector = createSelector(
  scheduleSelector,
  (schedule:Document):ScheduleData => {
    return schedule.documentData as ScheduleData;
  }
);

export const scheduleCurrentSelector = createSelector(
  scheduleSelector,
  (schedule:Document):ScheduleCurrent => {
    return schedule.documentCurrent as ScheduleCurrent;
  }
);

// Selectors for the schedule data

export const scheduleNumberSelector = createSelector(
  scheduleDataSelector,
  (scheduleData:ScheduleData) => scheduleData.documentNumber
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
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].dayNumber
);

export const dateSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].date
);

export const shiftsSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts
);

export const shiftSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift]
);

export const shifNumbertSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].shiftNumber
);

export const startTimeSelector = createSelector(
    [scheduleDataSelector, scheduleCurrentSelector],
    (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].startTime
);

export const endTimeSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].endTime
);

export const halfDaySelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].halfDay
);

export const walkawaySelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].walkaway
);

export const contractorsSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors
);

export const totalHoursSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].totalHours
);

export const contractorIdSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorId
);

export const contractorNameSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorName
);

export const contractorPositionSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorPosition
);

export const contractorRateSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorRate
);

export const contractorTimeInSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeIn
);

export const contractorTimeOutSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTimeOut
);

export const contractorHoursSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorHours
);

export const contractorTotalSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorTotal
);

export const contractorOvertimeSelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].contractorOvertime
);

export const contractorWalkawaySelector = createSelector(
  [scheduleDataSelector, scheduleCurrentSelector],
  (scheduleData:ScheduleData, current:ScheduleCurrent) => scheduleData.days[current.day].shifts[current.shift].contractors[current.contractor].walkaway
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

export const scheduleCurrentDaySelector = createSelector(
  scheduleCurrentSelector,
  (current:ScheduleCurrent) => current.day
);

export const scheduleCurrentShiftSelector = createSelector(
  scheduleCurrentSelector,
  (current:ScheduleCurrent) => current.shift
);

export const scheduleCurrentContractorSelector = createSelector(
  scheduleCurrentSelector,
  (current:ScheduleCurrent) => current.contractor
);

export const scheduleCurrentPhaseSelector = createSelector(
  scheduleCurrentSelector,
  (current:ScheduleCurrent) => current.phase
);