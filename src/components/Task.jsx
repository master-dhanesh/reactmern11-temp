import { useLocation, useParams } from "react-router-dom";

const Task = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1 className="text-4xl">Task</h1>

            <p className="text-2xl text-green-400">{params.i}</p>
        </div>
    );
};

export default Task;
