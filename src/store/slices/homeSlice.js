import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    home: "",
  },
  reducers: {
    getHome: (state, action) => {
      state.home = action.payload;
    },
  },
});

export const { getHome } = homeSlice.actions;

export default homeSlice.reducer;
