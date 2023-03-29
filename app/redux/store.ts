import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./slices/scheduleSlice";
import newEntryPortalReducer from "./slices/portalSlice";

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        newEntryPortal: newEntryPortalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;