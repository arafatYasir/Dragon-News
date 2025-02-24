import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.webp"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li className="hover:text-[#303030]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:text-[#303030]"><NavLink to="/bookmarks">Bookmarks</NavLink></li>    </>
    return (
        <nav className="flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div></div>
            <ul className="flex text-lg text-[#706F6F] gap-5">
                {links}
            </ul>
            <div className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                    {
                        user && user?.photoURL ? <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="User's Image" /> : <img src={userLogo} alt="User Icon" />
                    }
                    {
                        user && user?.displayName ? <h4>{user?.displayName}</h4> : ""
                    }
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