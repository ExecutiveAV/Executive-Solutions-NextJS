export interface Day {
    dayNumber: number;
    date: string;
    shifts: Shift[];
}

export interface Shift {
    shiftNumber: number;
    startTime: string;
    endTime: string;
    totalHours: number;
    contractors: Contractor[];
}

export interface Contractor {
    contractorId: number;
    contractorName: string;
    contractorPosition: string;
    contractorRate: number;
    contractorTimeIn: string;
    contractorTimeOut: string;
    contractorHours: number;
    contractorTotal: number;
    contractorOvertime: number;
    walkaway: boolean;
}

export interface ScheduleData {
    scheduleNumber: number;
    clientCompany: string;
    showVenue: string;
    days: Day[];
    createdAt: string;
    updatedAt: string;
};

export interface Current {
    day: number;
    shift: number;
    contractor: number;
    date: string;
}

export interface ScheduleState {
    scheduleData: ScheduleData;
    current: Current;
}

///////

export interface PortalState {
    isNewItemPortalOpen: boolean;
    newEntryPortalType: string;
    newEnttyPortalDocument: any;
    didUpload: boolean;
}