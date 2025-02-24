import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";


const SocialLogin = ({warningToast}) => {
    const { user, signInWithGoogle } = useContext(AuthContext);
    const handleSignIn = () => {
        if (user) {
            warningToast();
        }
        else {
            signInWithGoogle();
        }
    }
    return (
        <div>
            <h4 className="text-xl font-semibold text-[#403F3F] leading-7">Login With</h4>

            <div className="mt-5">
                <button onClick={handleSignIn} className="btn w-3xs mb-2 flex items-center gap-2 border lg:w-full py-5 rounded-lg">
                    <FaGoogle className="text-lg" />
                    <span>Login with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;