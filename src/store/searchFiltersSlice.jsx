import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchFiltersSlice = createSlice({
  name: "searchFilters",
  initialState,
  reducers: {
    setSearchFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchFilters } = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;
