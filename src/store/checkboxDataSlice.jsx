// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   checkboxData: [],
// };

// const checkboxDataSlice = createSlice({
//   name: "checkboxData",
//   initialState,
//   reducers: {
//     addCheckboxData: (state, action) => {
//       state.checkboxData.push(action.payload);
//     },
//     resetCheckboxData: (state) => {
//       state.checkboxData = [];
//     },
//   },
// });

// export const { addCheckboxData, resetCheckboxData } = checkboxDataSlice.actions;

// export default checkboxDataSlice.reducer;

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
    removeCheckboxData: (state, action) => {
      state.checkboxData = state.checkboxData.filter(item =>
        item.field !== action.payload.field || item.name !== action.payload.name
      );
    },
    resetCheckboxData: (state) => {
      state.checkboxData = [];
    },
  },
});

export const { addCheckboxData, removeCheckboxData, resetCheckboxData } = checkboxDataSlice.actions;

export default checkboxDataSlice.reducer;
