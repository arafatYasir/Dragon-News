import facebookLogo from "../assets/fb.png"
import twitterLogo from "../assets/twitter.png"
import instagramLogo from "../assets/instagram.png"

const FindUs = () => {
    return (
        <div className="mt-[30px]">
            <h4 className="text-xl font-semibold text-[#403F3F] leading-7">Find Us On</h4>

            <div className="join flex join-vertical mt-5">
                <a href="https://www.facebook.com/" target="_blank" className="btn gap-3 join-item justify-start py-7 bg-white hover:bg-base-200">
                    <img src={facebookLogo} alt="facebook icon" />
                    <span className="text-[16px] font-medium leading-7 text-[#706F6F]">Facebook</span>
                </a>
                <a href="https://x.com/" target="_blank" className="btn gap-3 join-item justify-start py-7 bg-white hover:bg-base-200">
                    <img src={twitterLogo} alt="twitter icon" />
                    <span className="text-[16px] font-medium leading-7 text-[#706F6F]">Twitter</span>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="btn gap-3 join-item justify-start py-7 bg-white hover:bg-base-200">
                    <img src={instagramLogo} alt="instagram icon" />
                    <span className="text-[16px] font-medium leading-7 text-[#706F6F]">Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default FindUs;