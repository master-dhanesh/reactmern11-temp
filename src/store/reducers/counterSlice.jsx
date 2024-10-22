import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
};
const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers: {}, //actions
});

export default counterslice.reducer;
