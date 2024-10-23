import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/reducers/counterSlice";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    const IncrementHandler = () => {
        //call action | value + 1
        dispatch(increment(value + 1));
    };
    return (
        <div className="w-[80%] mx-auto my-10 p-10 rounded bg-zinc-200">
            <h1 className="mb-5 text-5xl font-extrabold">{value}</h1>
            <button
                onClick={IncrementHandler}
                className="mr-5 px-4 py-2 rounded bg-green-300"
            >
                Increment By 1
            </button>
            <button className="px-4 py-2 rounded bg-red-300">
                Decrement By 1
            </button>
        </div>
    );
};

export default App;
