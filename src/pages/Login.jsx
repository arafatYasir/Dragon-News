import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const location = useLocation();
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // clearing previous messages
        setErrorMessage("");

        // getting form values
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        // sign in user with email and password
        signInUser(email, password)
            .then(() => {
                e.target.reset();
                // sending user back to home page
                navigate(location?.state ? location.state : "/category/01");
            })
            .catch(error => {
                const errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    setErrorMessage("The email address is not valid.")
                } else if (errorCode === "auth/user-not-found") {
                    setErrorMessage("No user found with this email. Please sign up first.");
                } else if (errorCode === "auth/wrong-password") {
                    setErrorMessage("Incorrect password. Please try again.");
                } else if (errorCode === "auth/too-many-requests") {
                    setErrorMessage("Too many failed attempts. Try again later.");
                } else if (errorCode === "auth/network-request-failed") {
                    setErrorMessage("Network error. Please check your internet connection.");
                } else if (errorCode === "auth/email-already-in-use") {
                    setErrorMessage("This email is already in use. Try signing in instead.");
                } else if (errorCode === "auth/invalid-credential") {
                    setErrorMessage("Invalid email or password. Please check your details.");
                } else if (errorCode === "auth/account-exists-with-different-credential") {
                    setErrorMessage("An account already exists with this email but a different sign-in method. Try using that method.");
                }
            })
    }

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="md:w-[752px] bg-white px-10 py-10 md:py-[70px] md:px-0 rounded-md">
                <h2 className="md:text-4xl text-3xl text-[#403F3F] font-semibold text-center">Login Your Account</h2>
                {/* line */}
                <div className="h-[1px] bg-[#E7E7E7] max-w-[606px] mx-auto my-10"></div>

                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:w-[558px] mx-auto">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="email-field">Email Address</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="email-field" type="email" name="email" placeholder="Enter your email address" required />
                    </div>

                    <div className="flex flex-col md:w-[558px] mx-auto mt-6">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="password-field">Password</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="password-field" type="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="md:w-[558px] mx-auto mt-2.5">
                        <Link to="/auth/reset_password" className="text-[17px] text-[#403F3F] link-hover">Forgot Password</Link>
                    </div>

                    <div className="md:w-[558px] mx-auto mt-7">
                        <button className="w-full bg-[#403F3F] text-white text-lg md:text-xl font-semibold py-4 rounded-md cursor-pointer">Login</button>
                    </div>

                    <div className="md:w-[558px] mx-auto mt-2">
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>

                    <p className="text-center text-[16px] font-semibold leading-7 text-[#706F6F] mt-7">Don't Have An Account? <Link to="/auth/register" className="text-[#F75B5F] link-hover">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;