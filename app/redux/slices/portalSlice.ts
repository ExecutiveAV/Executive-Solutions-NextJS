import { PortalState } from "../../types/types";

import { createSlice } from "@reduxjs/toolkit";

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
        setIsNewItemPortalOpen: (state, action) => {
            state.isNewItemPortalOpen = action.payload;
        },
        setNewEntryPortalType: (state, action) => {
            state.newEntryPortalType = action.payload;
        },
        setNewEntryPortalDocument: (state, action) => {
            state.newEntryPortalDocument = action.payload;
        },
        setDidUpload: (state, action) => {
            state.didUpload = action.payload;
        },
        clearNewEntryPortalDocument: (state) => {
            state.newEntryPortalDocument = {};
        },
    }
});

export const { setIsNewItemPortalOpen, setNewEntryPortalType, setNewEntryPortalDocument, setDidUpload, clearNewEntryPortalDocument } = newEntryPortalSlice.actions;

export default newEntryPortalSlice.reducer;