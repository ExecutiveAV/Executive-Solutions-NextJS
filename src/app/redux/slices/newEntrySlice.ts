import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { newEntry, newEntryCompany, newEntryContractor, newEntryPosition, newEntryVenue, newEntryPayable } from "../../types/types";

const initialState: newEntry = {
    company: {
        companyName: "",
        companyAddress: "",
        companyAddress2: "",
        companyCity: "",
        companyState: "",
        companyZip: "",
        companyPOC: "",
        companyEmail: "",
        companyPhone: "",
    },
    venue: {
        venueName: "",
        venueAddress: "",
        venueAddress2: "",
        venueCity: "",
        venueState: "",
        venueZip: "",
    },
    contractor: {
        contractorName: "",
        contractorAddress: "",
        contractorAddress2: "",
        contractorCity: "",
        contractorState: "",
        contractorZip: "",
        contractorEmail: "",
        contractorPhone: "",
    },
    position: {
        positionName: "",
        positionRate: 0,
    },
    payable: {
        payableName: "",
        payableAddress: "",
        payableAddress2: "",
        payableCity: "",
        payableState: "",
        payableZip: "",
        payableEmail: "",
    },
    kind: "",
    validation: {
        company: {
            companyName: false,
            companyAddress: false,
            companyAddress2: false,
            companyCity: false,
            companyState: false,
            companyZip: false,
            companyPOC: false,
            companyEmail: false,
            companyPhone: false,
            valid: false,
        },
        venue: {
            venueName: false,
            venueAddress: false,
            venueAddress2: false,
            venueCity: false,
            venueState: false,
            venueZip: false,
            valid: false,
        },
        contractor: {
            contractorName: false,
            contractorAddress: false,
            contractorAddress2: false,
            contractorCity: false,
            contractorState: false,
            contractorZip: false,
            contractorEmail: false,
            contractorPhone: false,
            valid: false,
        },
        position: {
            positionName: false,
            positionRate: false,
            valid: false,
        },
        payable: {
            payableName: false,
            payableAddress: false,
            payableAddress2: false,
            payableCity: false,
            payableState: false,
            payableZip: false,
            payableEmail: false,
            valid: false,
        },
    },
};

const validateString = (str: string, minLength: number, maxLength: number): boolean => {
    if (typeof str !== "string" || str.length < minLength || str.length > maxLength) {
        return false;
    }

    const validCharsRegex = /^[a-zA-Z0-9\s.,!?:;'"()-]+$/;
    return validCharsRegex.test(str);
}

const validateEmail = (email: string): boolean => {
    if (typeof email !== "string" || email.length < 5 || email.length > 50) {
        return false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

const validatePhone = (phone: string): boolean => {
    if (typeof phone !== "string" || phone.length < 10 || phone.length > 15) {
        return false;
    }

    const phoneRegex = /^(\+1)?[-.\s]?(\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
}

const validateState = (state: string): boolean => {
    if (typeof state !== "string" || state.length !== 2) {
        return false;
    }

    const stateRegex = /^[A-Z]{2}$/;
    return stateRegex.test(state);
}


const validateZip = (zip: string): boolean => {
    if (typeof zip !== "string" || zip.length !== 5) {
        return false;
    }

    return true
}

const validateRate = (rate: number): boolean => {
    if (rate < 0 || rate > 5000) {
        return false;
    }

    return true;
}

export const newEntrySlice = createSlice({
    name: "newEntry",
    initialState,
    reducers: {
        ///// SETTERS /////
        setNewEntryKind: (state, action: PayloadAction<string>) => {
            state.kind = action.payload;
        },
        setNewEntryCompany: (state, action: PayloadAction<newEntryCompany>) => {
            state.company = action.payload;
        },
        setNewEntryVenue: (state, action: PayloadAction<newEntryVenue>) => {
            state.venue = action.payload;
        },
        setNewEntryContractor: (state, action: PayloadAction<newEntryContractor>) => {
            state.contractor = action.payload;
        },
        setNewEntryPosition: (state, action: PayloadAction<newEntryPosition>) => {
            state.position = action.payload;
        },
        setNewEntryPayable: (state, action: PayloadAction<newEntryPayable>) => {
            state.payable.payableAddress
        },
        ///// COMPANY /////
        setNewEntryCompanyName: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.company.companyName = true;
                state.company.companyName = action.payload;
            } else {
                state.validation.company.companyName = false;
                state.company.companyName = action.payload;
            }
        },
        setNewEntryCompanyAddress: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.company.companyAddress = true;
                state.company.companyAddress = action.payload;
            } else {
                state.validation.company.companyAddress = false;
                state.company.companyAddress = action.payload;
            }
        },
        setNewEntryCompanyAddress2: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.company.companyAddress2 = true;
                state.company.companyAddress2 = action.payload;
            } else {
                state.validation.company.companyAddress2 = false;
                state.company.companyAddress2 = action.payload;
            }
        },
        setNewEntryCompanyCity: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.company.companyCity = true;
                state.company.companyCity = action.payload;
            } else {
                state.validation.company.companyCity = false;
                state.company.companyCity = action.payload;
            }
        },
        setNewEntryCompanyState: (state, action: PayloadAction<string>) => {
            if (validateState(action.payload)) {
                state.validation.company.companyState = true;
                state.company.companyState = action.payload;
            } else {
                state.validation.company.companyState = false;
                state.company.companyState = action.payload;
            }
        },
        setNewEntryCompanyZip: (state, action: PayloadAction<string>) => {
            if (validateZip(action.payload)) {
                state.validation.company.companyZip = true;
                state.company.companyZip = action.payload;
            } else {
                state.validation.company.companyZip = false;
                state.company.companyZip = action.payload;
            }
        },
        setNewEntryCompanyPOC: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.company.companyPOC = true;
                state.company.companyPOC = action.payload;
            } else {
                state.validation.company.companyPOC = false;
                state.company.companyPOC = action.payload;
            }
        },
        setNewEntryCompanyEmail: (state, action: PayloadAction<string>) => {
            if (validateEmail(action.payload)) {
                state.validation.company.companyEmail = true;
                state.company.companyEmail = action.payload;
            } else {
                state.validation.company.companyEmail = false;
                state.company.companyEmail = action.payload;
            }
        },
        setNewEntryCompanyPhone: (state, action: PayloadAction<string>) => {
            if (validatePhone(action.payload)) {
                state.validation.company.companyPhone = true;
                state.company.companyPhone = action.payload;
            } else {
                state.validation.company.companyPhone = false;
                state.company.companyPhone = action.payload;
            }
        },
        ///// VENUE /////
        setNewEntryVenueName: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.venue.venueName = true;
                state.venue.venueName = action.payload;
            } else {
                state.validation.venue.venueName = false;
                state.venue.venueName = action.payload;
            }
        },
        setNewEntryVenueAddress: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.venue.venueAddress = true;
                state.venue.venueAddress = action.payload;
            } else {
                state.validation.venue.venueAddress = false;
                state.venue.venueAddress = action.payload;
            }
        },
        setNewEntryVenueAddress2: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.venue.venueAddress2 = true;
                state.venue.venueAddress2 = action.payload;
            } else {
                state.validation.venue.venueAddress2 = false;
                state.venue.venueAddress2 = action.payload;
            }
        },
        setNewEntryVenueCity: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.venue.venueCity = true;
                state.venue.venueCity = action.payload;
            } else {
                state.validation.venue.venueCity = false;
                state.venue.venueCity = action.payload;
            }
        },
        setNewEntryVenueState: (state, action: PayloadAction<string>) => {
            if (validateState(action.payload)) {
                state.validation.venue.venueState = true;
                state.venue.venueState = action.payload;
            } else {
                state.validation.venue.venueState = false;
                state.venue.venueState = action.payload;
            }
        },
        setNewEntryVenueZip: (state, action: PayloadAction<string>) => {
            if (validateZip(action.payload)) {
                state.validation.venue.venueZip = true;
                state.venue.venueZip = action.payload;
            } else {
                state.validation.venue.venueZip = false;
                state.venue.venueZip = action.payload;
            }
        },
        ///// CONTRACTOR /////
        setNewEntryContractorName: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.contractor.contractorName = true;
                state.contractor.contractorName = action.payload;
            } else {
                state.validation.contractor.contractorName = false;
                state.contractor.contractorName = action.payload;
            }
        },
        setNewEntryContractorAddress: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.contractor.contractorAddress = true;
                state.contractor.contractorAddress = action.payload;
            } else {
                state.validation.contractor.contractorAddress = false;
                state.contractor.contractorAddress = action.payload;
            }
        },
        setNewEntryContractorAddress2: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.contractor.contractorAddress2 = true;
                state.contractor.contractorAddress2 = action.payload;
            } else {
                state.validation.contractor.contractorAddress2 = false;
                state.contractor.contractorAddress2 = action.payload;
            }
        },
        setNewEntryContractorCity: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.contractor.contractorCity = true;
                state.contractor.contractorCity = action.payload;
            } else {
                state.validation.contractor.contractorCity = false;
                state.contractor.contractorCity = action.payload;
            }
        },
        setNewEntryContractorState: (state, action: PayloadAction<string>) => {
            if (validateState(action.payload)) {
                state.validation.contractor.contractorState = true;
                state.contractor.contractorState = action.payload;
            } else {
                state.validation.contractor.contractorState = false;
                state.contractor.contractorState = action.payload;
            }
        },
        setNewEntryContractorZip: (state, action: PayloadAction<string>) => {
            if (validateZip(action.payload)) {
                state.validation.contractor.contractorZip = true;
                state.contractor.contractorZip = action.payload;
            } else {
                state.validation.contractor.contractorZip = false;
                state.contractor.contractorZip = action.payload;
            }
        },
        setNewEntryContractorEmail: (state, action: PayloadAction<string>) => {
            if (validateEmail(action.payload)) {
                state.validation.contractor.contractorEmail = true;
                state.contractor.contractorEmail = action.payload;
            } else {
                state.validation.contractor.contractorEmail = false;
                state.contractor.contractorEmail = action.payload;
            }
        },
        setNewEntryContractorPhone: (state, action: PayloadAction<string>) => {
            if (validatePhone(action.payload)) {
                state.validation.contractor.contractorPhone = true;
                state.contractor.contractorPhone = action.payload;
            } else {
                state.validation.contractor.contractorPhone = false;
                state.contractor.contractorPhone = action.payload;
            }
        },
        ///// POSITION /////
        setNewEntryPositionName: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.position.positionName = true;
                state.position.positionName = action.payload;
            } else {
                state.validation.position.positionName = false;
                state.position.positionName = action.payload;
            }
        },
        setNewEntryPositionRate: (state, action: PayloadAction<number>) => {
            if (validateRate(action.payload)) {
                state.validation.position.positionRate = true;
                state.position.positionRate = action.payload;
            } else {
                state.validation.position.positionRate = false;
                state.position.positionRate = action.payload;
            }
        },
        ///// PAYABLE /////
        setNewEntryPayableName: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.payable.payableName = true;
                state.payable.payableName = action.payload;
            } else {
                state.validation.payable.payableName = false;
                state.payable.payableName = action.payload;
            }
        },
        setNewEntryPayableAddress: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.payable.payableAddress = true;
                state.payable.payableAddress = action.payload;
            } else {
                state.validation.payable.payableAddress = false;
                state.payable.payableAddress = action.payload;
            }
        },
        setNewEntryPayableAddress2: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.payable.payableAddress2 = true;
                state.payable.payableAddress2 = action.payload;
            } else {
                state.validation.payable.payableAddress2 = false;
                state.payable.payableAddress2 = action.payload;
            }
        },
        setNewEntryPayableCity: (state, action: PayloadAction<string>) => {
            if (validateString(action.payload, 2, 50)) {
                state.validation.payable.payableCity = true;
                state.payable.payableCity = action.payload;
            } else {
                state.validation.payable.payableCity = false;
                state.payable.payableCity = action.payload;
            }
        },
        setNewEntryPayableState: (state, action: PayloadAction<string>) => {
            if (validateState(action.payload)) {
                state.validation.payable.payableState = true;
                state.payable.payableState = action.payload;
            } else {
                state.validation.payable.payableState = false;
                state.payable.payableState = action.payload;
            }
        },
        setNewEntryPayableZip: (state, action: PayloadAction<string>) => {
            if (validateZip(action.payload)) {
                state.validation.payable.payableZip = true;
                state.payable.payableZip = action.payload;
            } else {
                state.validation.payable.payableZip = false;
                state.payable.payableZip = action.payload;
            }
        },
        setNewEntryPayableEmail: (state, action: PayloadAction<string>) => {
            if (validateEmail(action.payload)) {
                state.validation.payable.payableEmail = true;
                state.payable.payableEmail = action.payload;
            } else {
                state.validation.payable.payableEmail = false;
                state.payable.payableEmail = action.payload;
            }
        },
        ///// RESETTERS /////
        resetNewEntryCompany: (state) => {
            state.company = {
                companyName: "",
                companyAddress: "",
                companyAddress2: "",
                companyCity: "",
                companyState: "",
                companyZip: "",
                companyPOC: "",
                companyEmail: "",
                companyPhone: "",
            };
        },
        resetNewEntryVenue: (state) => {
            state.venue = {
                venueName: "",
                venueAddress: "",
                venueAddress2: "",
                venueCity: "",
                venueState: "",
                venueZip: "",
            };
        },
        resetNewEntryContractor: (state) => {
            state.contractor = {
                contractorName: "",
                contractorAddress: "",
                contractorAddress2: "",
                contractorCity: "",
                contractorState: "",
                contractorZip: "",
                contractorEmail: "",
                contractorPhone: "",
            };
        },
        resetNewEntryPosition: (state) => {
            state.position = {
                positionName: "",
                positionRate: 0,
            };
        },
        resetNewEntryPayable: (state) => {
            state.payable = {
                payableName: "",
                payableAddress: "",
                payableAddress2: "",
                payableCity: "",
                payableState: "",
                payableZip: "",
                payableEmail: "",
            };
        },
        ///// VALIDATION /////
        checkNewEntryCompanyValidation: (state) => {
            if (state.validation.company.companyName && state.validation.company.companyAddress && state.validation.company.companyCity && state.validation.company.companyState && state.validation.company.companyZip && state.validation.company.companyPOC && state.validation.company.companyEmail && state.validation.company.companyPhone) {
                state.validation.company.valid = true;
            } else {
                state.validation.company.valid = false;
            }
        },
        checkNewEntryVenueValidation: (state) => {
            if (state.validation.venue.venueName && state.validation.venue.venueAddress && state.validation.venue.venueCity && state.validation.venue.venueState && state.validation.venue.venueZip) {
                state.validation.venue.valid = true;
            } else {
                state.validation.venue.valid = false;
            }
        },
        checkNewEntryContractorValidation: (state) => {
            if (state.validation.contractor.contractorName && state.validation.contractor.contractorAddress && state.validation.contractor.contractorCity && state.validation.contractor.contractorState && state.validation.contractor.contractorZip && state.validation.contractor.contractorEmail && state.validation.contractor.contractorPhone) {
                state.validation.contractor.valid = true;
            } else {
                state.validation.contractor.valid = false;
            }
        },
        checkNewEntryPositionValidation: (state) => {
            if (state.validation.position.positionName && state.validation.position.positionRate) {
                state.validation.position.valid = true;
            } else {
                state.validation.position.valid = false;
            }
        },
        checkNewEntryPayableValidation: (state) => {
            if (state.validation.payable.payableName && state.validation.payable.payableAddress && state.validation.payable.payableCity && state.validation.payable.payableState && state.validation.payable.payableZip && state.validation.payable.payableEmail) {
                state.validation.payable.valid = true;
            } else {
                state.validation.payable.valid = false;
            }
        },
    },
});

export const {
    setNewEntryKind,
    setNewEntryCompany,
    setNewEntryVenue,
    setNewEntryContractor,
    setNewEntryPosition,
    setNewEntryPayable,
    ///// COMPANY /////
    setNewEntryCompanyName,
    setNewEntryCompanyAddress,
    setNewEntryCompanyAddress2,
    setNewEntryCompanyCity,
    setNewEntryCompanyState,
    setNewEntryCompanyZip,
    setNewEntryCompanyPOC,
    setNewEntryCompanyEmail,
    setNewEntryCompanyPhone,
    ///// VENUE /////
    setNewEntryVenueName,
    setNewEntryVenueAddress,
    setNewEntryVenueAddress2,
    setNewEntryVenueCity,
    setNewEntryVenueState,
    setNewEntryVenueZip,
    ///// CONTRACTOR /////
    setNewEntryContractorName,
    setNewEntryContractorAddress,
    setNewEntryContractorAddress2,
    setNewEntryContractorCity,
    setNewEntryContractorState,
    setNewEntryContractorZip,
    setNewEntryContractorEmail,
    setNewEntryContractorPhone,
    ///// POSITION /////
    setNewEntryPositionName,
    setNewEntryPositionRate,
    ///// PAYABLE /////
    setNewEntryPayableName,
    setNewEntryPayableAddress,
    setNewEntryPayableAddress2,
    setNewEntryPayableCity,
    setNewEntryPayableState,
    setNewEntryPayableZip,
    setNewEntryPayableEmail,
    ///// RESETTERS /////
    resetNewEntryCompany,
    resetNewEntryVenue,
    resetNewEntryContractor,
    resetNewEntryPosition,
    resetNewEntryPayable,
    ///// VALIDATION /////
    checkNewEntryCompanyValidation,
    checkNewEntryVenueValidation,
    checkNewEntryContractorValidation,
    checkNewEntryPositionValidation,
    checkNewEntryPayableValidation,

} = newEntrySlice.actions;

export default newEntrySlice.reducer;