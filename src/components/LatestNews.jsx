import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] mt-8 p-4 flex items-center gap-5 max-w-6xl mx-auto">
            <p className="text-white bg-[#D72050] w-[110px] h-12 text-xl font-medium leading-7 flex justify-center items-center">Latest</p>

            <Marquee pauseOnHover={true} className=" text-lg text-[#403F3F] font-semibold leading-7">
                <div className="flex gap-8">
                    <Link to="/news/0282e0e58a5c404fbd15261f11c2ab6a">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Link>
                    <Link to="/news/f06f8cc035b04bd1158e4198281915a3">9 Things to do in Colorado this Labor Day weekend</Link>
                    <Link to="/news/f69a695f037cd9484cecaea37ca71012">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;