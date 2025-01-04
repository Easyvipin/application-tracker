import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

const applicationsReducer = applicationsSlice.reducer;
export default applicationsReducer;
