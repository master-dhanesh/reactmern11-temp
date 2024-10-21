import { useEffect } from "react";
import axios from "../utils/axios";
import { useState } from "react";

const User = () => {
    const [toggle, settoggle] = useState(false);
    const [users, setusers] = useState(null);
    const getusers = async () => {
        try {
            const { data } = await axios.get("/users");
            setusers(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("[User.jsx] Created");
        getusers();
        return () => {
            console.log("[User.jsx] Destroyed");
        };
    }, [toggle]);

    console.log(toggle);

    return (
        <div>
            <h1 className="text-5xl font-extrabold">User</h1>
            <button
                className="px-4 py-2 bg-red-300 rounded"
                onClick={() => settoggle(!toggle)}
            >
                Toggle
            </button>
        </div>
    );
};

export default User;
