import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "../containers/Applications/applicationsSlice";
import userReducer from "../containers/User/userSlice";

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
    user: userReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
