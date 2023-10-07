import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Invoice, InvoiceData, InvoiceBodyContractor, InvoiceBodyContractorDay } from '../../types/types';

const initialState: Invoice = {
    invoiceData: {
        invoiceHeader: {
            invoiceNumber: 0,
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
                },
            ],
        },
        invoiceFooter: {
            invoiceFooterSubtotal: 0,
            invoiceFooterTax: 0,
            invoiceFooterTotal: 0,
        },
    },
    invoiceCurrent: {
        day: 0,
        contractor: 0,
        phase: 0,
    },
};

const initialContractor: InvoiceBodyContractor = {
    contractorTitle: '',
    contractorDays: [],
    contractorTotal: 0,
};

const initialDay: InvoiceBodyContractorDay = {
    contractorDayDate: '',
    contractorDayHours: 0,
    contractorDayPosition: '',
    contractorDayTimeIn: '8:00 AM',
    contractorDayTimeOut: '6:00 PM',
    contractorDayOT: 0,
    contractorDayRate: 0,
    contractorDayTotal: 0,
    contractorDayWalkaway: false,
};

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        ///////// Main Actions /////////
        setInvoiceData: (state, action: PayloadAction<InvoiceData>) => {
            state.invoiceData = action.payload;
        },
        setInvoiceCurrent: (state, action: PayloadAction<Invoice['invoiceCurrent']>) => {
            state.invoiceCurrent = action.payload;
        },
        ///////// Invoice Data Actions /////////
        setInvoiceHeader: (state, action: PayloadAction<Invoice['invoiceData']['invoiceHeader']>) => {
            state.invoiceData.invoiceHeader = action.payload;
        },
        setInvoiceBillTo: (state, action: PayloadAction<Invoice['invoiceData']['invoiceBillTo']>) => {
            state.invoiceData.invoiceBillTo = action.payload;
        },
        setInvoicePayTo: (state, action: PayloadAction<Invoice['invoiceData']['invoicePayTo']>) => {
            state.invoiceData.invoicePayTo = action.payload;
        },
        setInvoiceBody: (state, action: PayloadAction<Invoice['invoiceData']['invoiceBody']>) => {
            state.invoiceData.invoiceBody = action.payload;
        },
        setInvoiceFooter: (state, action: PayloadAction<Invoice['invoiceData']['invoiceFooter']>) => {
            state.invoiceData.invoiceFooter = action.payload;
        },
        ///////// Invoice Current Actions /////////
        setInvoiceCurrentPhase: (state, action: PayloadAction<Invoice['invoiceCurrent']['phase']>) => {
            state.invoiceCurrent.phase = action.payload;
        },
        setInvoiceCurrentContractor: (state, action: PayloadAction<Invoice['invoiceCurrent']['contractor']>) => {
            state.invoiceCurrent.contractor = action.payload;
        },
        setInvoiceCurrentDay: (state, action: PayloadAction<Invoice['invoiceCurrent']['day']>) => {
            state.invoiceCurrent.day = action.payload;
        },
        ///////// Invoice Body Actions /////////
        setInvoiceBodyContractors: (state, action: PayloadAction<Invoice['invoiceData']['invoiceBody']['invoiceBodyContractors']>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors = action.payload;
        },
        setInvoiceBodyContractor: (state, action: PayloadAction<InvoiceBodyContractor>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors.push(action.payload);
        },
        removeInvoiceBodyContractor: (state, action: PayloadAction<number>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors.splice(action.payload, 1);
        },
        setInvoiceBodyContractorTitle: (state, action: PayloadAction<{ contractorIndex: number, contractorTitle: string }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorTitle = action.payload.contractorTitle;
        },
        setInvoiceBodyContractorDays: (state, action: PayloadAction<{ contractorIndex: number, contractorDays: InvoiceBodyContractorDay[] }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays = action.payload.contractorDays;
        },
        setInvoiceBodyContractorDay: (state, action: PayloadAction<{ contractorIndex: number, contractorDay: InvoiceBodyContractorDay }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays.push(action.payload.contractorDay);
        },
        removeInvoiceBodyContractorDay: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays.splice(action.payload.contractorDayIndex, 1);
        },
        setInvoiceBodyContractorDayDate: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayDate: string }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayDate = action.payload.contractorDayDate;
        },
        setInvoiceBodyContractorDayHours: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayHours: number }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayHours = action.payload.contractorDayHours;
        },
        setInvoiceBodyContractorDayPosition: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayPosition: string }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayPosition = action.payload.contractorDayPosition;
        },
        setInvoiceBodyContractorDayTimeIn: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayTimeIn: string }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayTimeIn = action.payload.contractorDayTimeIn;
        },
        setInvoiceBodyContractorDayTimeOut: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayTimeOut: string }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayTimeOut = action.payload.contractorDayTimeOut;
        },
        setInvoiceBodyContractorDayOT: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayOT: number }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayOT = action.payload.contractorDayOT;
        },
        setInvoiceBodyContractorDayRate: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayRate: number }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayRate = action.payload.contractorDayRate;
        },
        setInvoiceBodyContractorDayTotal: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayTotal: number }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayTotal = action.payload.contractorDayTotal;
        },
        setInvoiceBodyContractorDayWalkaway: (state, action: PayloadAction<{ contractorIndex: number, contractorDayIndex: number, contractorDayWalkaway: boolean }>) => {
            state.invoiceData.invoiceBody.invoiceBodyContractors[action.payload.contractorIndex].contractorDays[action.payload.contractorDayIndex].contractorDayWalkaway = action.payload.contractorDayWalkaway;
        },
        ///////// Invoice Footer Actions /////////
        setInvoiceFooterSubtotal: (state, action: PayloadAction<Invoice['invoiceData']['invoiceFooter']['invoiceFooterSubtotal']>) => {
            state.invoiceData.invoiceFooter.invoiceFooterSubtotal = action.payload;
        },
        setInvoiceFooterTax: (state, action: PayloadAction<Invoice['invoiceData']['invoiceFooter']['invoiceFooterTax']>) => {
            state.invoiceData.invoiceFooter.invoiceFooterTax = action.payload;
        },
        setInvoiceFooterDiscount: (state, action: PayloadAction<Invoice['invoiceData']['invoiceFooter']['invoiceFooterDiscount']>) => {
            state.invoiceData.invoiceFooter.invoiceFooterDiscount = action.payload;
        },
        setInvoiceFooterTotal: (state, action: PayloadAction<Invoice['invoiceData']['invoiceFooter']['invoiceFooterTotal']>) => {
            state.invoiceData.invoiceFooter.invoiceFooterTotal = action.payload;
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
    ///////// Invoice Current Actions /////////
    setInvoiceCurrentPhase,
    setInvoiceCurrentContractor,
    setInvoiceCurrentDay,
    ///////// Invoice Body Actions /////////
    setInvoiceBodyContractors,
    setInvoiceBodyContractor,
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