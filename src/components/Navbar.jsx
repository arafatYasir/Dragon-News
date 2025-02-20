import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"

const Navbar = () => {
    const links = <>
        <li className="hover:text-[#303030]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#303030]"><NavLink to="/about">About</NavLink></li>
        <li className="hover:text-[#303030]"><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <nav className="flex justify-between items-center mt-5 max-w-6xl mx-auto">
            <div></div>
            <ul className="flex text-lg text-[#706F6F] gap-5">
                {links}
            </ul>
            <div className="flex items-center gap-2">
                <div>
                    <img src={userLogo} alt="" />
                </div>
                <button className="btn btn-ghost text-xl font-semibold text-white bg-[#403F3F] rounded-none">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;