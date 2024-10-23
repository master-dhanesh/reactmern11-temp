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
    }, //actions
});
export default counterslice.reducer;
export const { increment } = counterslice.actions;
