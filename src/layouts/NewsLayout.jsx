import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/RightNavbar";
import Navbar from "../components/Navbar";

const NewsLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-[Poppins] px-4 lg:px-0">
            <Header />
            <Navbar />

            <div className="mt-8">
                <h2 className="text-xl font-semibold leading-7 text-[#403F3F]">Dragon News</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    <div className="lg:col-span-9">
                        <Outlet />
                    </div>
                    <aside className="lg:col-span-3">
                        <RightNavbar />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;