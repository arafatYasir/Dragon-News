import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li className="hover:text-[#303030]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#303030]"><NavLink to="/about">About</NavLink></li>
        <li className="hover:text-[#303030]"><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <nav className="flex justify-between items-center pt-5 max-w-6xl mx-auto">
            <div>{user && user?.email}</div>
            <ul className="flex text-lg text-[#706F6F] gap-5">
                {links}
            </ul>
            <div className="flex items-center gap-2">
                <div>
                    <img src={userLogo} alt="" />
                </div>
                {
                    user && user?.email ? 
                    (
                        <button onClick={signOutUser} to="/auth/login" className="btn btn-ghost text-xl font-semibold text-white bg-[#403F3F] rounded-none">Log Out</button>
                    )
                    : 
                    (
                        <Link to="/auth/login" className="btn btn-ghost text-xl font-semibold text-white bg-[#403F3F] rounded-none">Login</Link>
                    )
                }
                
            </div>
        </nav>
    );
};

export default Navbar;