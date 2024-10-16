import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import Task from "./components/Task";

const App = () => {
    return (
        <>
            <nav className="justify-center my-10 flex gap-x-10 ">
                <NavLink
                    className={(e) => (e.isActive ? "text-red-300" : "")}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={(e) => (e.isActive ? "text-red-300" : "")}
                    to="/show"
                >
                    Show
                </NavLink>
            </nav>

            <div className="w-[80%] mx-auto p-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/show" element={<Show />} />
                    <Route path="/show/:i" element={<Task />} /> */}
                    <Route path="/show" element={<Show />}>
                        <Route path="/show/:i" element={<Task />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;
