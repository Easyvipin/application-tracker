import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserState {
  name: string;
  bio: string;
  experience: number;
  currentOrg: string;
  photoUrl: string;
}

const initialState: UserState = {
  name: "Vipin Chandra",
  bio: "",
  experience: 3,
  currentOrg: "Wednesday",
  photoUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    detailsAdded: (_, action: PayloadAction<UserState>) => {
      action.payload;
    },
  },
});

export const { detailsAdded } = userSlice.actions;

export const userDetailSelector = (state: RootState) => state.user;

const userReducer = userSlice.reducer;
export default userReducer;
