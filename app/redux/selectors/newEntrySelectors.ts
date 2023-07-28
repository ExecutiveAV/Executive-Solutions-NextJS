import { createSelector } from "reselect";
import { newEntry, newEntryValidation, newEntryCompany, newEntryVenue, newEntryContractor, newEntryPosition } from "../../types/types";
import { RootState } from "../store/store";

const newEntrySelector = (state:RootState) => state.newEntry;

export const newEntryCompanySelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.company
);

export const newEntryVenueSelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.venue
);

export const newEntryContractorSelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.contractor
);

export const newEntryPositionSelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.position
);

export const newEntryKindSelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.kind
);

export const newEntryValidationSelector = createSelector(
    newEntrySelector,
    (newEntry:newEntry) => newEntry.validation
);

export const newEntryCompanyValidation = createSelector(
    newEntryValidationSelector,
    (validation:newEntryValidation) => validation.company
);

export const newEntryVenueValidation = createSelector(
    newEntryValidationSelector,
    (validation:newEntryValidation) => validation.venue
);

export const newEntryContractorValidation = createSelector(
    newEntryValidationSelector,
    (validation:newEntryValidation) => validation.contractor
);

export const newEntryPositionValidation = createSelector(
    newEntryValidationSelector,
    (validation:newEntryValidation) => validation.position
);

export const newEntryCompanyNameSelector = createSelector(
    newEntryCompanySelector,
    (company:newEntryCompany) => company.companyName
);

export const newEntryVenueNameSelector = createSelector(
    newEntryVenueSelector,
    (venue:newEntryVenue) => venue.venueName
);

export const newEntryContractorNameSelector = createSelector(
    newEntryContractorSelector,
    (contractor:newEntryContractor) => contractor.contractorName
);

export const newEntryPositionNameSelector = createSelector(
    newEntryPositionSelector,
    (position:newEntryPosition) => position.positionName
);

export const newEntryCompanyNameValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyName
);

export const newEntryCompanyAddressValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyAddress
);

export const newEntryCompanyCityValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyCity
);

export const newEntryCompanyStateValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyState
);

export const newEntryCompanyZipValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyZip
);

export const newEntryCompanyPOCValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyPOC
);

export const newEntryCompanyEmailValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyEmail
);

export const newEntryCompanyPhoneValidationSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.companyPhone
);

export const newEntryCompanyIsValidSelector = createSelector(
    newEntryCompanyValidation,
    (validation) => validation.valid
);

///////////////////////////////////////////

export const newEntryVenueNameValidationSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.venueName
);

export const newEntryVenueAddressValidationSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.venueAddress
);

export const newEntryVenueCityValidationSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.venueCity
);

export const newEntryVenueStateValidationSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.venueState
);

export const newEntryVenueZipValidationSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.venueZip
);

export const newEntryVenueIsValidSelector = createSelector(
    newEntryVenueValidation,
    (validation) => validation.valid
);

///////////////////////////////////////////

export const newEntryContractorNameValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorName
);

export const newEntryContractorAddressValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorAddress
);

export const newEntryContractorCityValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorCity
);

export const newEntryContractorStateValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorState
);

export const newEntryContractorZipValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorZip
);

export const newEntryContractorEmailValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorEmail
);

export const newEntryContractorPhoneValidationSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.contractorPhone
);

export const newEntryContractorIsValidSelector = createSelector(
    newEntryContractorValidation,
    (validation) => validation.valid
);

///////////////////////////////////////////

export const newEntryPositionNameValidationSelector = createSelector(
    newEntryPositionValidation,
    (validation) => validation.positionName
);

export const newEntryPositionRateValidationSelector = createSelector(
    newEntryPositionValidation,
    (validation) => validation.positionRate
);

export const newEntryPositionIsValidSelector = createSelector(
    newEntryPositionValidation,
    (validation) => validation.valid
);