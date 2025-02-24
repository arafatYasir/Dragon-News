import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsCard = ({ singleNews }) => {
    const { author, title, thumbnail_url, image_url, details, rating, total_view } = singleNews;
    return (
        <div className="border border-[#E7E7E7]">
            {/* Author part */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#F3F3F3]">
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-10 rounded-full" src={author.img} alt="author image" loading="lazy" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-semibold leading-6 text-[#403F3F]">{author.name}</h4>
                        <p className="text-md text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center text-2xl gap-2">
                    <button className="cursor-pointer"><CiBookmark /></button>
                    <button className="cursor-pointer"><CiShare2 /></button>
                </div>
            </div>
            {/* News part */}
            <div className="px-5 mt-3">
                <h2 className="text-xl text-[#403F3F] font-bold leading-9">{title}</h2>

                <div className="mt-5 mb-8">
                    <img className="w-full h-72 object-cover" src={thumbnail_url} alt="thumbnail image" loading="lazy" />
                </div>

                <p className="text-[16px] leading-7 text-[#706F6F]">
                    {details.slice(0, 200)}...{" "}
                    <Link to={`/news/${singleNews._id}`} className="text-[16px] font-semibold leading-6 text-[#FF8C47]">Read More</Link>
                </p>

                {/* line */}
                <div className="h-[1px] bg-[#E7E7E7] my-5"></div>

                {/* rating & views */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <FaStar className="text-[#FF8C47] text-xl" />
                            <FaStar className="text-[#FF8C47] text-xl" />
                            <FaStar className="text-[#FF8C47] text-xl" />
                            <FaStar className="text-[#FF8C47] text-xl" />
                            <FaStar className="text-[#FF8C47] text-xl" />
                        </div>
                        <p className="text-[17px] font-medium text-[#706F6F] leading-6">{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoMdEye className="text-2xl" />
                        <p className="text-[16px] text-[#706F6F] font-medium leading-6">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;