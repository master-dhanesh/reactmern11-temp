import { useSelector } from "react-redux";

const App = () => {
    const data = useSelector((state) => state);
    console.log(data);
    return <div>App</div>;
};

export default App;
