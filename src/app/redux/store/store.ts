import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "../slices/scheduleSlice";
import newEntryPortalReducer from "../slices/portalSlice";
import newEntryReducer from "../slices/newEntrySlice";
import invoiceReducer from "../slices/invoiceSlice";

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        invoice: invoiceReducer,
        newEntryPortal: newEntryPortalReducer,
        newEntry: newEntryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;