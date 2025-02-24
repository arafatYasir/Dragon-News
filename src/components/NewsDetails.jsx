import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "./Header";
import Navbar from "./Navbar";
import RightNavbar from "./RightNavbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    const { image_url, title, details, category_id } = news;

    return (
        <div className="max-w-6xl mx-auto font-[Poppins] px-4 lg:px-0">
            <Header />
            <Navbar />

            <div className="mt-8">
                <h2 className="text-xl font-semibold leading-7 text-[#403F3F]">Dragon News</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-9">
                        {/* News details */}
                        <div className="p-8 border border-[#E7E7E7] rounded-sm mt-5">
                            <div>
                                <img className="w-full" src={image_url} alt="News Image" />
                            </div>

                            <h2 className="max-w-[660px] text-[25px] font-bold leading-11 text-[#403F3F] mt-5 mb-2">{title}</h2>

                            <p className="text-[17px] font-medium leading-7 text-[#706F6F]">{details}</p>

                            <button className="bg-[#D72050] px-2 py-1 rounded-lg mt-5">
                                <Link to={`/category/${category_id}`} className="flex items-center gap-2">
                                    <FaArrowLeftLong className="text-white text-xl" />
                                    <span className="text-white text-xl">Go back</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <aside className="lg:col-span-3">
                        <RightNavbar />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;