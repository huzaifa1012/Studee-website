import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const selectedProgramSlice = createSlice({
  name: "selectedProgram",
  initialState,
  reducers: {
    setSelectedProgram: (state, action) => action.payload,
    clearSelectedProgram: () => initialState,
  },
});

export const { setSelectedProgram, clearSelectedProgram } =
  selectedProgramSlice.actions;
export default selectedProgramSlice.reducer;
