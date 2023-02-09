import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/more">More</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;