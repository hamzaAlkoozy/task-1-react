import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <p>Here are some pages you might be interested in:</p>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
