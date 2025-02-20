import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] mt-8 p-4 flex items-center gap-5 max-w-6xl mx-auto">
            <p className="text-white bg-[#D72050] w-[110px] h-12 text-xl font-medium leading-7 flex justify-center items-center">Latest</p>

            <Marquee pauseOnHover={true} className=" text-lg text-[#403F3F] font-semibold leading-7">
                <div className="flex gap-8">
                    <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui.</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain as...</Link>
                    <Link to="/news">Lorem ipsum dolor sit amet.</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;