export { increment } from "../reducers/counterSlice";
import { decrement } from "../reducers/counterSlice";

export const asyncdecrement = (value) => (dispatch, getState) => {
    console.log(getState());
    // api call
    setTimeout(() => {
        dispatch(decrement(value));
    }, 2000);
};
