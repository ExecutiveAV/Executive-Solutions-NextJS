import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "../slices/scheduleSlice";
import newEntryPortalReducer from "../slices/portalSlice";
import newEntryReducer from "../slices/newEntrySlice";

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        newEntryPortal: newEntryPortalReducer,
        newEntry: newEntryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;