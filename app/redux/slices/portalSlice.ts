import { PortalState } from "../../types/types";

import { createSlice } from "@reduxjs/toolkit";

const initialState: PortalState = {
    isNewItemPortalOpen: false,
    newEntryPortalType: "",
    newEnttyPortalDocument: {},
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
            state.newEnttyPortalDocument = action.payload;
        },
        setDidUpload: (state, action) => {
            state.didUpload = action.payload;
        }
    }
});

export const { setIsNewItemPortalOpen, setNewEntryPortalType, setNewEntryPortalDocument, setDidUpload } = newEntryPortalSlice.actions;

export default newEntryPortalSlice.reducer;