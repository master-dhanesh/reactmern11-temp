import { Link, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <nav className="my-10 flex justify-center gap-x-10">
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/product">Product</Link>
            </nav>
            <div className="w-[80%] p-10 rounded bg-zinc-200 mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
