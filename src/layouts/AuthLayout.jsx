import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-[Poppins] bg-[#F3F3F3]">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AuthLayout;