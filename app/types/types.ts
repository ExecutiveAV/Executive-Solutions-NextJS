export interface Shift {
    shiftNumber: number;
    startTime: string;
    endTime: string;
    totalHours: number;
    halfDay: boolean;
    walkaway: boolean;
    contractors: Contractor[];
}

export interface Day {
    dayNumber: number;
    date: string;
    shifts: Shift[];
}

export interface Position {
    positionName: string;
    positionRate: number;
}

export interface Contractor {
    contractorId: number;
    contractorName: string;
    contractorPosition: Position;
    contractorRate: number;
    contractorTimeIn: string;
    contractorTimeOut: string;
    contractorHours: number;
    contractorTotal: number;
    contractorOvertime: number;
    walkaway: boolean;
}

export interface Company {
    companyName: string;
    companyPOC: string;
    companyEmail: string;
    companyInitials: string;
    companyPhone: string;
    companyAddress: string;
    companyAddress2: string;
    companyCity: string;
    companyState: string;
    companyZip: string;
}

export interface Venue {
    venueName: string;
    venueAddress: string;
    venueAddress2: string;
    venueCity: string;
    venueState: string;
    venueZip: string;
}

export interface ScheduleData {
    scheduleNumber: number;
    company: Company;
    venue: Venue;
    days: Day[];
    createdAt: string;
    updatedAt: string;
};

export interface Current {
    day: number;
    shift: number;
    contractor: number;
    date: string;
    phase: number;
}

export interface ScheduleState {
    scheduleData: ScheduleData;
    current: Current;
}

///////

export interface PortalState {
    isNewItemPortalOpen: boolean;
    newEntryPortalType: string;
    newEntryPortalDocument: any;
    didUpload: boolean;
}

//////
export interface newEntryCompany {
    companyName: string;
    companyPOC: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
    companyAddress2: string;
    companyCity: string;
    companyState: string;
    companyZip: string;
}

export interface newEntryVenue {
    venueName: string;
    venueAddress: string;
    venueAddress2: string;
    venueCity: string;
    venueState: string;
    venueZip: string;
}

export interface newEntryContractor {
    contractorName: string;
    contractorEmail: string;
    contractorPhone: string;
    contractorAddress: string;
    contractorAddress2: string;
    contractorCity: string;
    contractorState: string;
    contractorZip: string;
}

export interface newEntryPosition {
    positionName: string;
    positionRate: number;
}

export interface newEntryCompanyValidation {
    companyName: boolean;
    companyPOC: boolean;
    companyEmail: boolean;
    companyPhone: boolean;
    companyAddress: boolean;
    companyAddress2: boolean;
    companyCity: boolean;
    companyState: boolean;
    companyZip: boolean;
    valid: boolean;
}

export interface newEntryVenueValidation {
    venueName: boolean;
    venueAddress: boolean;
    venueAddress2: boolean;
    venueCity: boolean;
    venueState: boolean;
    venueZip: boolean;
    valid: boolean;
}

export interface newEntryContractorValidation {
    contractorName: boolean;
    contractorEmail: boolean;
    contractorPhone: boolean;
    contractorAddress: boolean;
    contractorAddress2: boolean;
    contractorCity: boolean;
    contractorState: boolean;
    contractorZip: boolean;
    valid: boolean;
}

export interface newEntryPositionValidation {
    positionName: boolean;
    positionRate: boolean;
    valid: boolean;
}

export interface newEntryValidation {
    company: newEntryCompanyValidation;
    venue: newEntryVenueValidation;
    contractor: newEntryContractorValidation;
    position: newEntryPositionValidation;
}

export interface newEntry {
    company: newEntryCompany;
    venue: newEntryVenue;
    contractor: newEntryContractor;
    position: newEntryPosition;
    kind: string;
    validation: newEntryValidation;
}

//////PROPS//////

export interface SchedulePDFProps {
    days: Day[];
    companyName: string;
    scheduleNumber: number;
    venueName: string;
    venueStreet: string;
    venueStreet2 ?: string;
    venueCity: string;
    venueState: string;
    venueZip: string;
}


