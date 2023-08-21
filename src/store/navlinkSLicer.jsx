// activeLinkSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeLink: null,
};

const activeLinkSlice = createSlice({
    name: "activeLink",
    initialState,
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
    },
});

export const { setActiveLink } = activeLinkSlice.actions;

export const selectActiveLink = (state) => state.activeLink.activeLink;

export default activeLinkSlice.reducer;
