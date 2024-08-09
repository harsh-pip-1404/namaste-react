import { logo_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const status = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md p-4">
            <div>
                <img className="w-40 h-auto" src={logo_URL} alt="Logo" />
            </div>
            <div>
                <ul className="flex space-x-6 items-center">
                    <li className="text-white font-medium">Online Status: {status ? "✅" : "🔴"}</li>
                    <li><Link to="/" className="text-white font-medium hover:text-gray-200 transition-colors">Home</Link></li>
                    <li><Link to="/about" className="text-white font-medium hover:text-gray-200 transition-colors">About Us</Link></li>
                    <li><Link to="/contact" className="text-white font-medium hover:text-gray-200 transition-colors">Contact Us</Link></li>
                    <li><Link to="/cart" className="text-white font-medium hover:text-gray-200 transition-colors">Cart</Link></li>
                    <button 
                        className="login-btn bg-white text-cyan-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300 shadow"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
