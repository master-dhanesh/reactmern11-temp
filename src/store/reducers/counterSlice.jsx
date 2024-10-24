import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};
const counterslice = createSlice({
    name: "conter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value = action.payload;
        },
        decrement: (state, action) => {
            state.value = action.payload;
        },
    },
});
export default counterslice.reducer;
export const { increment, decrement } = counterslice.actions;
