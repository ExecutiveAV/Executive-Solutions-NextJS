import { newEntry } from './../../types/types';
import { createSelector } from "reselect";
import { RootState } from "../store/store";

import {  } from "../../types/types";

export const portalSelector = (state:RootState) => state.newEntryPortal;

export const isNewItemPortalOpenSelector = createSelector(
    portalSelector,
    (portal) => portal.isNewItemPortalOpen
);

export const newEntryPortalTypeSelector = createSelector(
    portalSelector,
    (portal) => portal.newEntryPortalType
);

export const newEntryPortalDocumentSelector = createSelector(
    portalSelector,
    (portal) => portal.newEntryPortalDocument
);

export const didUploadSelector = createSelector(
    portalSelector,
    (portal) => portal.didUpload
);

export const newEntryPortalDocumentCompanySelector = createSelector(
    newEntryPortalDocumentSelector,
    (newEntryPortalDocument) => newEntryPortalDocument as newEntry
);