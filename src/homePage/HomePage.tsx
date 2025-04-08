import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <Link to="/counter">Go to Counter</Link>
        </div>
    );
};

export default HomePage;
