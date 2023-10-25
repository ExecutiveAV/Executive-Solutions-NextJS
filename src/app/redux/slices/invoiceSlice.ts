import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
    Document, InvoiceData, InvoiceHeader, InvoiceBodyContractor,
    InvoiceBodyContractorDay, InvoiceBillTo, InvoicePayTo, InvoiceFooter,
    InvoiceBody, newEntryContractor, newEntryCompany, Venue
} from '../../types/types';

const initialInvoiceData: InvoiceData = {
    type: 'invoice',
    documentNumber: 1,
    invoiceHeader: {
        invoiceNumber: 1,
        invoiceVenue: '',
        invoiceIssuedDate: '',
        invoicePaymentTerms: '',
        invoiceDueDate: '',
    },
    invoiceBillTo: {
        invoiceBillToName: '',
        invoiceBillToAddress: '',
        invoiceBillToAddress2: '',
        invoiceBillToCity: '',
        invoiceBillToState: '',
        invoiceBillToZip: '',
        invoiceBillToPhoneNum: '',
        invoiceBillToEmail: '',
        invoiceBillToPOC: '',
    },
    invoicePayTo: {
        invoicePayToName: '',
        invoicePayToAddress: '',
        invoicePayToAddress2: '',
        invoicePayToCity: '',
        invoicePayToState: '',
        invoicePayToZip: '',
        invoicePayToPhoneNum: '',
        invoicePayToEmail: '',
        invoicePayToPOC: '',
    },
    invoiceBody: {
        invoiceBodyContractors: [
            {
                contractorTitle: '',
                contractorDays: [
                    {
                        contractorDayDate: '',
                        contractorDayHours: 0,
                        contractorDayPosition: '',
                        contractorDayTimeIn: '8:00 AM',
                        contractorDayTimeOut: '6:00 PM',
                        contractorDayOT: 0,
                        contractorDayRate: 0,
                        contractorDayTotal: 0,
                        contractorDayWalkaway: false,
                    },
                ],
                contractorTotal: 0,
                contractorRate: 0,
            },
        ],
    },
    invoiceFooter: {
        invoiceFooterSubtotal: 0,
        invoiceFooterTax: 0,
        invoiceFooterTotal: 0,
    },
};

const initialState: Document = {
    documentData: initialInvoiceData,
    documentCurrent: {
        day: 0,
        contractor: 0,
        phase: 0,
    },
};

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        ///////// Main Actions /////////
        setInvoiceData: (state, action: PayloadAction<InvoiceData>) => {
            state.documentData = action.payload;
        },
        setInvoiceCurrent: (state, action: PayloadAction<Document['documentCurrent']>) => {
            state.documentCurrent = action.payload;
        },
        ///////// Invoice Data Actions /////////
        setInvoiceHeader: (state, action: PayloadAction<InvoiceHeader>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader = action.payload;
            }
        },
        setInvoiceBillTo: (state, action: PayloadAction<newEntryCompany>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToName = action.payload.companyName;
                state.documentData.invoiceBillTo.invoiceBillToAddress = action.payload.companyAddress;
                state.documentData.invoiceBillTo.invoiceBillToAddress2 = action.payload.companyAddress2;
                state.documentData.invoiceBillTo.invoiceBillToCity = action.payload.companyCity;
                state.documentData.invoiceBillTo.invoiceBillToState = action.payload.companyState;
                state.documentData.invoiceBillTo.invoiceBillToZip = action.payload.companyZip;
                state.documentData.invoiceBillTo.invoiceBillToEmail = action.payload.companyEmail;
            }
        },
        setInvoicePayTo: (state, action: PayloadAction<newEntryContractor>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToName = action.payload.contractorName;
                state.documentData.invoicePayTo.invoicePayToAddress = action.payload.contractorAddress;
                state.documentData.invoicePayTo.invoicePayToAddress2 = action.payload.contractorAddress2;
                state.documentData.invoicePayTo.invoicePayToCity = action.payload.contractorCity;
                state.documentData.invoicePayTo.invoicePayToState = action.payload.contractorState;
                state.documentData.invoicePayTo.invoicePayToZip = action.payload.contractorZip;
                state.documentData.invoicePayTo.invoicePayToEmail = action.payload.contractorEmail;
            }
        },
        setInvoiceBody: (state, action: PayloadAction<InvoiceBody>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBody = action.payload;
            }
        },
        setInvoiceFooter: (state, action: PayloadAction<InvoiceFooter>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceFooter = action.payload;
            }
        },
        ///////// Invoice Current Actions /////////
        setInvoiceCurrentPhase: (state, action: PayloadAction<Document['documentCurrent']['phase']>) => {
            state.documentCurrent.phase = action.payload;
        },
        setInvoiceCurrentContractor: (state, action: PayloadAction<Document['documentCurrent']['contractor']>) => {
            state.documentCurrent.contractor = action.payload;
        },
        setInvoiceCurrentDay: (state, action: PayloadAction<Document['documentCurrent']['day']>) => {
            state.documentCurrent.day = action.payload;
        },
        ///////// InvoiceHeader Actions /////////
        setInvoiceHeaderInvoiceNumber: (state, action: PayloadAction<InvoiceHeader['invoiceNumber']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader.invoiceNumber = action.payload;
            }
        },
        setInvoiceHeaderInvoiceVenue: (state, action: PayloadAction<Venue>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader.invoiceVenue = action.payload.venueName;
            }
        },
        setInvoiceHeaderInvoiceIssuedDate: (state, action: PayloadAction<InvoiceHeader['invoiceIssuedDate']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader.invoiceIssuedDate = action.payload;
            }
        },
        setInvoiceHeaderInvoicePaymentTerms: (state, action: PayloadAction<InvoiceHeader['invoicePaymentTerms']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader.invoicePaymentTerms = action.payload;
            }
        },
        setInvoiceHeaderInvoiceDueDate: (state, action: PayloadAction<InvoiceHeader['invoiceDueDate']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceHeader.invoiceDueDate = action.payload;
            }
        },
        ///////// Invoice Invoice Bill To Actions /////////
        setInvoiceBillToName: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToName']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToName = action.payload;
            }
        },
        setInvoiceBillToAddress: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToAddress']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToAddress = action.payload;
            }
        },
        setInvoiceBillToAddress2: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToAddress2']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToAddress2 = action.payload;
            }
        },
        setInvoiceBillToCity: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToCity']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToCity = action.payload;
            }
        },
        setInvoiceBillToState: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToState']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToState = action.payload;
            }
        },
        setInvoiceBillToZip: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToZip']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToZip = action.payload;
            }
        },
        setInvoiceBillToEmail: (state, action: PayloadAction<InvoiceBillTo['invoiceBillToEmail']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBillTo.invoiceBillToEmail = action.payload;
            }
        },
        ///////// Invoice Invoice Pay To Actions /////////
        setInvoicePayToName: (state, action: PayloadAction<InvoicePayTo['invoicePayToName']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToName = action.payload;
            }
        },
        setInvoicePayToAddress: (state, action: PayloadAction<InvoicePayTo['invoicePayToAddress']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToAddress = action.payload;
            }
        },
        setInvoicePayToAddress2: (state, action: PayloadAction<InvoicePayTo['invoicePayToAddress2']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToAddress2 = action.payload;
            }
        },
        setInvoicePayToCity: (state, action: PayloadAction<InvoicePayTo['invoicePayToCity']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToCity = action.payload;
            }
        },
        setInvoicePayToState: (state, action: PayloadAction<InvoicePayTo['invoicePayToState']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToState = action.payload;
            }
        },
        setInvoicePayToZip: (state, action: PayloadAction<InvoicePayTo['invoicePayToZip']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToZip = action.payload;
            }
        },
        setInvoicePayToEmail: (state, action: PayloadAction<InvoicePayTo['invoicePayToEmail']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoicePayTo.invoicePayToEmail = action.payload;
            }
        },
        ///////// Invoice Body Actions /////////
        setInvoiceBodyContractors: (state, action: PayloadAction<number>) => {
            if (state.documentData.type === 'invoice') {
                //do the same thing as below but for the invoice body
                const tempContractors: InvoiceBodyContractor[] = [...state.documentData.invoiceBody.invoiceBodyContractors];
                const newTotal = action.payload - state.documentData.invoiceBody.invoiceBodyContractors.length;

                if (newTotal > 0) {
                    for (let i = 0; i < newTotal; i++) {
                        tempContractors.push({
                            contractorTitle: '',
                            contractorDays: [
                                {
                                    contractorDayDate: '',
                                    contractorDayHours: 0,
                                    contractorDayPosition: '',
                                    contractorDayTimeIn: '8:00 AM',
                                    contractorDayTimeOut: '6:00 PM',
                                    contractorDayOT: 0,
                                    contractorDayRate: 0,
                                    contractorDayTotal: 0,
                                    contractorDayWalkaway: false,
                                },
                            ],
                            contractorTotal: 0,
                            contractorRate: 0,
                        });
                    }
                    state.documentData.invoiceBody.invoiceBodyContractors = tempContractors;
                } else if (newTotal < 0) {
                    state.documentData.invoiceBody.invoiceBodyContractors = tempContractors.slice(0, action.payload);
                } else if (newTotal === 0) {
                    return;
                }

            } else {
                throw new Error('Invalid operation: days, day or shift does not exist on InvoiceData or InvoiceCurrent');
            }
        },
        setInvoiceBodyContractor: (state, action: PayloadAction<newEntryContractor>) => {
            if (state.documentData.type === 'invoice') {
                let current = state.documentCurrent.contractor;
                console.log("this is the current contractor on invoices: ", current)
                state.documentData.invoiceBody.invoiceBodyContractors[current].contractorTitle = action.payload.contractorName;
            }
        },
        addInvoiceBodyContractor: (state, action: PayloadAction<number>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBody.invoiceBodyContractors.push({
                    contractorTitle: '',
                    contractorDays: [
                        {
                            contractorDayDate: '',
                            contractorDayHours: 0,
                            contractorDayPosition: '',
                            contractorDayTimeIn: '8:00 AM',
                            contractorDayTimeOut: '6:00 PM',
                            contractorDayOT: 0,
                            contractorDayRate: 0,
                            contractorDayTotal: 0,
                            contractorDayWalkaway: false,
                        },
                    ],
                    contractorTotal: 0,
                    contractorRate: 0,
                });
            }
        },
        removeInvoiceBodyContractor: (state, action: PayloadAction<number>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceBody.invoiceBodyContractors.splice(action.payload, 1);
            }
        },
        setInvoiceBodyContractorTitle: (state, action: PayloadAction<string>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorTitle = action.payload;
            }
        },
        setInvoiceBodyContractorDays: (state, action: PayloadAction<number>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const tempDays: InvoiceBodyContractorDay[] = [...state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays];
                const newTotal = action.payload - state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays.length;

                if (newTotal > 0) {
                    for (let i = 0; i < newTotal; i++) {
                        tempDays.push({
                            contractorDayDate: '',
                            contractorDayHours: 0,
                            contractorDayPosition: '',
                            contractorDayTimeIn: '8:00 AM',
                            contractorDayTimeOut: '6:00 PM',
                            contractorDayOT: 0,
                            contractorDayRate: 0,
                            contractorDayTotal: 0,
                            contractorDayWalkaway: false,
                        });
                    }
                    state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays = tempDays;
                } else if (newTotal < 0) {
                    state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays = tempDays.slice(0, action.payload);
                } else if (newTotal === 0) {
                    return;
                }
            }
        },
        setInvoiceBodyContractorDay: (state, action: PayloadAction<InvoiceBodyContractorDay>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay] = action.payload;
            }
        },
        removeInvoiceBodyContractorDay: (state, action: PayloadAction<number>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays.splice(action.payload, 1);
            }
        },
        setInvoiceBodyContractorDayDate: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayDate']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayDate = action.payload;
            }
        },
        setInvoiceBodyContractorDayHours: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayHours']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayHours = action.payload;
            }
        },
        setInvoiceBodyContractorDayPosition: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayPosition']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayPosition = action.payload;
            }
        },
        setInvoiceBodyContractorDayTimeIn: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayTimeIn']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayTimeIn = action.payload;
            }
        },
        setInvoiceBodyContractorDayTimeOut: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayTimeOut']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayTimeOut = action.payload;
            }
        },
        setInvoiceBodyContractorDayOT: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayOT']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;
                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayOT = action.payload;
            }
        },
        setInvoiceBodyContractorDayRate: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayRate']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;

                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayRate = action.payload;
            }
        },
        setInvoiceBodyContractorDayTotal: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayTotal']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;

                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayTotal = action.payload;
            }
        },
        setInvoiceBodyContractorDayWalkaway: (state, action: PayloadAction<InvoiceBodyContractorDay['contractorDayWalkaway']>) => {
            if (state.documentData.type === 'invoice') {
                const currentContractor = state.documentCurrent.contractor;
                const currentDay = state.documentCurrent.day;

                state.documentData.invoiceBody.invoiceBodyContractors[currentContractor].contractorDays[currentDay].contractorDayWalkaway = action.payload;
            }
        },
        ///////// Invoice Footer Actions /////////
        setInvoiceFooterSubtotal: (state, action: PayloadAction<InvoiceFooter['invoiceFooterSubtotal']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceFooter.invoiceFooterSubtotal = action.payload;
            }
        },

        setInvoiceFooterTax: (state, action: PayloadAction<InvoiceFooter['invoiceFooterTax']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceFooter.invoiceFooterTax = action.payload;
            }
        },
        setInvoiceFooterDiscount: (state, action: PayloadAction<InvoiceFooter['invoiceFooterDiscount']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceFooter.invoiceFooterDiscount = action.payload;
            }
        },
        setInvoiceFooterTotal: (state, action: PayloadAction<InvoiceFooter['invoiceFooterTotal']>) => {
            if (state.documentData.type === 'invoice') {
                state.documentData.invoiceFooter.invoiceFooterTotal = action.payload;
            }
        },
    }
});

export const {
    ///////// Main Actions /////////
    setInvoiceData,
    setInvoiceCurrent,
    ///////// Invoice Data Actions /////////
    setInvoiceHeader,
    setInvoiceBillTo,
    setInvoicePayTo,
    setInvoiceBody,
    setInvoiceFooter,
    //////// InvoiceHeader Actions /////////
    setInvoiceHeaderInvoiceNumber,
    setInvoiceHeaderInvoiceVenue,
    setInvoiceHeaderInvoiceIssuedDate,
    setInvoiceHeaderInvoicePaymentTerms,
    setInvoiceHeaderInvoiceDueDate,
    ///////// Invoice Invoice Bill To Actions /////////
    setInvoiceBillToName,
    setInvoiceBillToAddress,
    setInvoiceBillToAddress2,
    setInvoiceBillToCity,
    setInvoiceBillToState,
    setInvoiceBillToZip,
    setInvoiceBillToEmail,
    ///////// Invoice Invoice Pay To Actions /////////
    setInvoicePayToName,
    setInvoicePayToAddress,
    setInvoicePayToAddress2,
    setInvoicePayToCity,
    setInvoicePayToState,
    setInvoicePayToZip,
    setInvoicePayToEmail,
    ///////// Invoice Current Actions /////////
    setInvoiceCurrentPhase,
    setInvoiceCurrentContractor,
    setInvoiceCurrentDay,
    ///////// Invoice Body Actions /////////
    setInvoiceBodyContractors,
    setInvoiceBodyContractor,
    addInvoiceBodyContractor,
    removeInvoiceBodyContractor,
    setInvoiceBodyContractorTitle,
    setInvoiceBodyContractorDays,
    setInvoiceBodyContractorDay,
    removeInvoiceBodyContractorDay,
    setInvoiceBodyContractorDayDate,
    setInvoiceBodyContractorDayHours,
    setInvoiceBodyContractorDayPosition,
    setInvoiceBodyContractorDayTimeIn,
    setInvoiceBodyContractorDayTimeOut,
    setInvoiceBodyContractorDayOT,
    setInvoiceBodyContractorDayRate,
    setInvoiceBodyContractorDayTotal,
    setInvoiceBodyContractorDayWalkaway,
    ///////// Invoice Footer Actions /////////
    setInvoiceFooterSubtotal,
    setInvoiceFooterTax,
    setInvoiceFooterDiscount,
    setInvoiceFooterTotal,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;