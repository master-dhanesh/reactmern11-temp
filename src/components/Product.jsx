import { useEffect } from "react";
import axios from "../utils/axios";

const Product = () => {
    const getproducts = async () => {
        try {
            const { data } = await axios.get("/products");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);
    return (
        <div>
            <h1>Products</h1>
            <button
                className="mt-10 px-4 py-2 rounded bg-red-200"
                onClick={getproducts}
            >
                Get Products
            </button>
        </div>
    );
};

export default Product;
