import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsList: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    updateState(state, action) {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
  },
});

export default dashboardSlice.reducer;

export const dashboardActions = dashboardSlice.actions;
