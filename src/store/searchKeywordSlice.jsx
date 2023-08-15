import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchKeywordSlice = createSlice({
  name: "searchKeyword",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchKeyword } = searchKeywordSlice.actions;

export default searchKeywordSlice.reducer;
