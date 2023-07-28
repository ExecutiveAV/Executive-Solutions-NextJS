import { PortalState, newEntryCompany, newEntryContractor, newEntryPosition, newEntryVenue } from "../../types/types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: PortalState = {
    isNewItemPortalOpen: false,
    newEntryPortalType: "company",
    newEntryPortalDocument: {},
    didUpload: false,
};

const newEntryPortalSlice = createSlice({
    name: "newEntryPortal",
    initialState,
    reducers: {
        setIsNewItemPortalOpen: (state, action:PayloadAction<boolean>) => {
            state.isNewItemPortalOpen = action.payload;
        },
        setNewEntryPortalType: (state, action:PayloadAction<string>) => {
            state.newEntryPortalType = action.payload;
        },
        setNewEntryPortalDocument: (state, action:PayloadAction<newEntryCompany | newEntryContractor | newEntryPosition | newEntryVenue>) => {
            state.newEntryPortalDocument = action.payload;
        },
        setDidUpload: (state, action:PayloadAction<boolean>) => {
            state.didUpload = action.payload;
        },
        clearNewEntryPortalDocument: (state) => {
            state.newEntryPortalDocument = {};
        },
    }
});

export const { setIsNewItemPortalOpen, setNewEntryPortalType, setNewEntryPortalDocument, setDidUpload, clearNewEntryPortalDocument } = newEntryPortalSlice.actions;

export default newEntryPortalSlice.reducer;