import { createSlice } from "@reduxjs/toolkit";

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState: {
    welcome: "",
  },
  reducers: {
    setWelcomeText: (state, action) => {
      state.welcome = action.payload;
    },
  },
});

export const { setWelcomeText } = welcomeSlice.actions;

export default welcomeSlice.reducer;
