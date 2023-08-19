import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkboxData: [],
};

const checkboxDataSlice = createSlice({
  name: "checkboxData",
  initialState,
  reducers: {
    addCheckboxData: (state, action) => {
      state.checkboxData.push(action.payload);
    },
    resetCheckboxData: (state) => {
      state.checkboxData = [];
    },
  },
});

export const { addCheckboxData, resetCheckboxData } = checkboxDataSlice.actions;

export default checkboxDataSlice.reducer;
