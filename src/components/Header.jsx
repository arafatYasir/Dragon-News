import logo from "../assets/logo.webp"
import moment from "moment";

const Header = () => {
    return (
        <header className="mt-10 flex flex-col items-center">
            <div>
                <img src={logo} alt="Website Logo" />
            </div>
            <p className="text-lg leading-7 text-[#706F6F] mt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium leading-7 mt-2">
                <span className="text-[#403F3F]">{moment().format("dddd, ")}</span>
                <span className="text-[#706F6F]">{moment().format("MMMM D, YYYY")}</span>
            </p>
        </header>
    );
};

export default Header;