import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "../containers/Applications/applicationsSlice";

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
