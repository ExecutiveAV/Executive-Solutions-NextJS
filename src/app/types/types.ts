////// SCHEDULE TYPES //////

export interface Document {
    documentData: ScheduleData | InvoiceData;
    documentCurrent: ScheduleCurrent | InvoiceCurrent;
}

export interface ScheduleData {
    type: 'schedule';
    documentNumber: number;
    company: Company;
    venue: Venue;
    days: Day[];
    createdAt: string;
    updatedAt: string;
};

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
    halfDay: boolean;
    walkaway: boolean;
    contractors: Contractor[];
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

export interface Position {
    positionName: string;
    positionRate: number;
}

export interface ScheduleCurrent {
    day: number;
    shift: number;
    contractor: number;
    date: string;
    phase: number;
}

    ////// PORTAL TYPES //////

export interface PortalState {
    isNewItemPortalOpen: boolean;
    newEntryPortalType: string;
    newEntryPortalDocument: any;
    didUpload: boolean;
}

////// NEW ENTRY TYPES //////
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

export interface newEntryPayable {
    payableName: string;
    payableAddress: string;
    payableAddress2: string;
    payableCity: string;
    payableState: string;
    payableZip: string;
    payableEmail: string;
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

export interface newEntryPayableValidation {
    payableName: boolean;
    payableAddress: boolean;
    payableAddress2: boolean;
    payableCity: boolean;
    payableState: boolean;
    payableZip: boolean;
    payableEmail: boolean;
    valid: boolean;
}

export interface newEntryValidation {
    company: newEntryCompanyValidation;
    venue: newEntryVenueValidation;
    contractor: newEntryContractorValidation;
    position: newEntryPositionValidation;
    payable: newEntryPayableValidation;
}

export interface newEntry {
    company: newEntryCompany;
    venue: newEntryVenue;
    contractor: newEntryContractor;
    position: newEntryPosition;
    kind: string;
    payable: newEntryPayable;
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


//// INVOICE TYPES ////

export interface InvoiceData {
    type: 'invoice';
    documentNumber: number;
    invoiceHeader: InvoiceHeader;
    invoiceBillTo: InvoiceBillTo;
    invoicePayTo: InvoicePayTo;
    invoiceBody: InvoiceBody;
    invoiceFooter: InvoiceFooter;
}

export interface InvoiceCurrent {
    day: number;
    contractor: number;
    phase: number;
}

export interface InvoiceHeader {
    invoiceNumber: number;
    invoiceVenue: string;
    invoiceIssuedDate: string;
    invoicePaymentTerms: string;
    invoiceDueDate: string;
}

export interface InvoiceBillTo {
    invoiceBillToName: string;
    invoiceBillToAddress: string;
    invoiceBillToAddress2?: string;
    invoiceBillToCity: string;
    invoiceBillToState: string;
    invoiceBillToZip: string;
    invoiceBillToPhoneNum?: string;
    invoiceBillToEmail: string;
    invoiceBillToPOC?: string;
}

export interface InvoicePayTo {
    invoicePayToName: string;
    invoicePayToAddress: string;
    invoicePayToAddress2?: string;
    invoicePayToCity: string;   
    invoicePayToState: string;
    invoicePayToZip: string;
    invoicePayToPhoneNum?: string;
    invoicePayToEmail: string;
    invoicePayToPOC?: string;
}

export interface InvoiceBody {
    invoiceBodyContractors: InvoiceBodyContractor[];
}

export interface InvoiceBodyContractor {
    contractorTitle: string;
    contractorDays: InvoiceBodyContractorDay[];
    contractorTotal: number;
    contractorRate: number;
}

export interface InvoiceBodyContractorDay {
    contractorDayDate: string;
    contractorDayPosition: string;
    contractorDayTimeIn: string;
    contractorDayTimeOut: string;
    contractorDayHours: number;
    contractorDayRate: number;
    contractorDayOT: number;
    contractorDayTotal: number;
    contractorDayWalkaway: boolean;
}

export interface InvoiceFooter {
    invoiceFooterSubtotal: number;
    invoiceFooterTax: number;
    invoiceFooterDiscount?: number;
    invoiceFooterTotal: number;
}   