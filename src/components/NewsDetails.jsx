import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    const { image_url, title, details, category_id } = news;

    return (
        <div className="p-8 border border-[#E7E7E7] rounded-sm mt-5">
            <div>
                <img className="w-full" src={image_url} alt="" />
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
    );
};

export default NewsDetails;