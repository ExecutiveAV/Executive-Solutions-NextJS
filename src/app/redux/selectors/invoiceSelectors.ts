import { Document, InvoiceBodyContractor, InvoiceBodyContractorDay, InvoiceBillTo, InvoiceCurrent, InvoiceData, InvoiceFooter, InvoiceHeader, InvoicePayTo } from '../../types/types';
import { createSelector } from 'reselect';
import { RootState } from '../store/store';

////////// SELECTORS //////////

const invoiceSelector = (state:RootState) => state.invoice;

export const invoiceDataSelector = createSelector(
    invoiceSelector,
    (invoice:Document) => invoice.documentData
);

export const invoiceCurrentSelector = createSelector(
    invoiceSelector,
    (invoice:Document) => invoice.documentCurrent
);

export const invoiceTypeSelector = createSelector(
    invoiceDataSelector,
    (invoiceData) => invoiceData.type
);

// export const invoiceNumberSelector = createSelector(
//     invoiceDataSelector,
//     (invoiceData:InvoiceData) => invoiceData.documentNumber
// );

////////// INVOICE DATA SELECTORS //////////

export const invoiceHeaderSelector = createSelector(
    invoiceDataSelector,
    (invoiceData:InvoiceData) => invoiceData.invoiceHeader
);

export const invoiceBillToSelector = createSelector(
    invoiceDataSelector,
    (invoiceData:InvoiceData) => invoiceData.invoiceBillTo
);

export const invoicePayToSelector = createSelector(
    invoiceDataSelector,
    (invoiceData:InvoiceData) => invoiceData.invoicePayTo
);

export const invoiceBodySelector = createSelector(
    invoiceDataSelector,
    (invoiceData:InvoiceData) => invoiceData.invoiceBody
);

export const invoiceFooterSelector = createSelector(
    invoiceDataSelector,
    (invoiceData:InvoiceData) => invoiceData.invoiceFooter
);

////////// INVOICE CURRENT SELECTORS //////////

export const invoiceCurrentPhaseSelector = createSelector(
    invoiceCurrentSelector,
    (invoiceCurrent) => invoiceCurrent.phase
);

export const invoiceCurrentContractorSelector = createSelector(
    invoiceCurrentSelector,
    (invoiceCurrent) => invoiceCurrent.contractor
);

export const invoiceCurrentDaySelector = createSelector(
    invoiceCurrentSelector,
    (invoiceCurrent) => invoiceCurrent.day
);

////////// INVOICE HEADER SELECTORS //////////

export const invoiceNumberSelector = createSelector(
    invoiceHeaderSelector,
    (invoiceHeader) => invoiceHeader.invoiceNumber
);

export const invoiceVenueSelector = createSelector(
    invoiceHeaderSelector,
    (invoiceHeader) => invoiceHeader.invoiceVenue
);

export const invoiceIssuedDateSelector = createSelector(
    invoiceHeaderSelector,
    (invoiceHeader) => invoiceHeader.invoiceIssuedDate
);

export const invoicePaymentTermsSelector = createSelector(
    invoiceHeaderSelector,
    (invoiceHeader) => invoiceHeader.invoicePaymentTerms
);

export const invoiceDueDateSelector = createSelector(
    invoiceHeaderSelector,
    (invoiceHeader) => invoiceHeader.invoiceDueDate
);

////////// INVOICE BILL TO SELECTORS //////////

export const invoiceBillToNameSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToName
);

export const invoiceBillToAddressSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToAddress
);

export const invoiceBillToAddress2Selector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToAddress2
);

export const invoiceBillToCitySelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToCity
);

export const invoiceBillToStateSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToState
);

export const invoiceBillToZipSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToZip
);

export const invoiceBillToPhoneNumSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToPhoneNum
);

export const invoiceBillToEmailSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToEmail
);

export const invoiceBillToPOCSelector = createSelector(
    invoiceBillToSelector,
    (invoiceBillTo) => invoiceBillTo.invoiceBillToPOC
);

////////// INVOICE PAY TO SELECTORS //////////

export const invoicePayToNameSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToName
);

export const invoicePayToAddressSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToAddress
);

export const invoicePayToAddress2Selector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToAddress2
);

export const invoicePayToCitySelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToCity
);

export const invoicePayToStateSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToState
);

export const invoicePayToZipSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToZip
);

export const invoicePayToPhoneNumSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToPhoneNum
);

export const invoicePayToEmailSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToEmail
);

export const invoicePayToPOCSelector = createSelector(
    invoicePayToSelector,
    (invoicePayTo) => invoicePayTo.invoicePayToPOC
);

////////// INVOICE BODY SELECTORS //////////

export const invoiceBodyContractorsSelector = createSelector(
    invoiceBodySelector,
    (invoiceBody) => invoiceBody.invoiceBodyContractors
);

////////// INVOICE FOOTER SELECTORS //////////

export const invoiceFooterSubtotalSelector = createSelector(
    invoiceFooterSelector,
    (invoiceFooter) => invoiceFooter.invoiceFooterSubtotal
);

export const invoiceFooterTaxSelector = createSelector(
    invoiceFooterSelector,
    (invoiceFooter) => invoiceFooter.invoiceFooterTax
);

export const invoiceFooterDiscountSelector = createSelector(
    invoiceFooterSelector,
    (invoiceFooter) => invoiceFooter.invoiceFooterDiscount
);

export const invoiceFooterTotalSelector = createSelector(
    invoiceFooterSelector,
    (invoiceFooter) => invoiceFooter.invoiceFooterTotal
);

////////// INVOICE BODY CONTRACTOR SELECTORS //////////

export const invoiceBodyContractorNameSelector = createSelector(
    invoiceBodyContractorsSelector,
    invoiceCurrentContractorSelector,
    (invoiceBodyContractors, invoiceCurrentContractor) => invoiceBodyContractors[invoiceCurrentContractor].contractorTitle
);

export const invoiceBodyContractorDaysSelector = createSelector(
    invoiceBodyContractorsSelector,
    invoiceCurrentContractorSelector,
    (invoiceBodyContractors, invoiceCurrentContractor) => invoiceBodyContractors[invoiceCurrentContractor].contractorDays
);

////////// INVOICE BODY CONTRACTOR DAY SELECTORS //////////

export const invoiceBodyContractorDayDateSelector = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayDate
);

export const invoiceBodyContractorDayPosition = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayPosition
);

export const invoiceBodyContractorDayTimeIn = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayTimeIn
);

export const invoiceBodyContractorDayTimeOut = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayTimeOut
);

export const invoiceBodyContractorDayOT = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayOT
);

export const invoiceBodyContractorDayHours = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayHours
);

export const invoiceBodyContractorDayRate = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayRate
);

export const invoiceBodyContractorDayTotal = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayTotal
);

export const invoiceBodyContractorDayWalkaway = createSelector(
    invoiceBodyContractorDaysSelector,
    invoiceCurrentDaySelector,
    (invoiceBodyContractorDays, invoiceCurrentDay) => invoiceBodyContractorDays[invoiceCurrentDay].contractorDayWalkaway
);