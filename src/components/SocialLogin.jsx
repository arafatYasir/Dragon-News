import { FaGithub, FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h4 className="text-xl font-semibold text-[#403F3F] leading-7">Login With</h4>

            <div className="mt-5">
                <button className="btn mb-2 flex items-center gap-2 border w-full py-5 rounded-lg">
                    <FaGoogle className="text-lg" />
                    <span>Login with Google</span>
                </button>
                <button className="btn flex items-center gap-2 border w-full py-5 rounded-lg">
                    <FaGithub className="text-lg" />
                    <span>Login with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;