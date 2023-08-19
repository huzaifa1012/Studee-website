import { configureStore } from "@reduxjs/toolkit";
import searchFiltersReducer from "./searchFiltersSlice.jsx";
import userIdReducer from "./userIdSlice.jsx";
import selectedProgramReducer from "./selectedProgramSlice.jsx";
import searchKeywordReducer from "./searchKeywordSlice.jsx"; // Import the new slice
import checkboxDataReducer from "./checkboxDataSlice"; // Import the new slice

const rootReducer = {
  searchFilters: searchFiltersReducer,
  userId: userIdReducer,
  selectedProgram: selectedProgramReducer,
  searchKeyword: searchKeywordReducer, // Add the new slice
  checkboxData: checkboxDataReducer, // for personalized matched
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
