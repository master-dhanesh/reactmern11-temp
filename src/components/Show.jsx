import { Link, Outlet } from "react-router-dom";

const Show = () => {
    return (
        <>
            <div className="list-disc p-10 rounded-xl bg-red-100">
                <li className="list-item">
                    <Link to="/show/item1">Item 1</Link>
                </li>
                <li className="list-item">
                    <Link to="/show/item2">Item 2</Link>
                </li>
                <li className="list-item">
                    <Link to="/show/item3">Item 3</Link>
                </li>
                <li className="list-item">
                    <Link to="/show/item4">Item 4</Link>
                </li>
            </div>
            <hr />
            <Outlet />
        </>
    );
};

export default Show;
