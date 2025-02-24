import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const HomeLayout = () => {
    return (
        <div className="font-[Poppins] px-4 lg:px-0">
            <Header />
            <LatestNews />
            <Navbar />

            <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-[75px] ">
                <aside className="md:col-span-3">
                    <LeftNavbar />
                </aside>
                <section className="md:col-span-6">
                    <Outlet />
                </section>
                <aside className="md:col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;