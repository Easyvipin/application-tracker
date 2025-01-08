import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Applications {
  id: string;
  company: string;
  position: string;
  date: string;
}

const initialState: Applications[] = [
  {
    id: "1",
    company: "google",
    position: "Ui engineer",
    date: "2025-01-01",
  },
  {
    id: "2",
    company: "facebook",
    position: "Ui engineer",
    date: "2025-01-01",
  },
];

const applicationsSlice = createSlice({
  name: "applications",
  initialState,

  reducers: {
    applicationAdded: (state, action: PayloadAction<Applications>) => {
      state.push(action.payload);
    },
    applicationUpdated: (state, action: PayloadAction<Applications>) => {
      const { id, company, position } = action.payload;
      const existingApplication = state.find(
        (eachApplication) => eachApplication.id === id
      );
      if (existingApplication) {
        existingApplication.company = company;
        existingApplication.position = position;
      }
    },
  },
});

export const { applicationAdded } = applicationsSlice.actions;

const selectApplications = (state: RootState) => state.applications;
export { selectApplications };

const applicationsReducer = applicationsSlice.reducer;
export default applicationsReducer;
