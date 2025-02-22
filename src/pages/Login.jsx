import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
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
            .then(res => {
                console.log(res.user);

                e.target.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="md:w-[752px] bg-white py-[70px] rounded-md">
                <h2 className="text-4xl text-[#403F3F] font-semibold text-center">Login Your Account</h2>
                {/* line */}
                <div className="h-[1px] bg-[#E7E7E7] max-w-[606px] mx-auto my-10"></div>

                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:w-[558px] mx-auto">
                        <label className="text-xl font-semibold text-[#403F3F] mb-4" htmlFor="email-field">Email Address</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="email-field" type="email" name="email" placeholder="Enter your email address" required />
                    </div>

                    <div className="flex flex-col md:w-[558px] mx-auto mt-6">
                        <label className="text-xl font-semibold text-[#403F3F] mb-4" htmlFor="password-field">Password</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="password-field" type="password" name="password" placeholder="Enter your password" required />
                    </div>

                    <div className="md:w-[558px] mx-auto mt-2">
                        <a href="#" className="text-lg text-[#403F3F] link-hover">Forgot Password</a>
                    </div>

                    <div className="md:w-[558px] mx-auto mt-7">
                        <button className="w-full bg-[#403F3F] text-white text-xl font-semibold py-4 rounded-md cursor-pointer">Login</button>
                    </div>

                    <p className="text-center text-[16px] font-semibold leading-7 text-[#706F6F] mt-7">Don't Have An Account? <Link to="/auth/register" className="text-[#F75B5F] link-hover">Register</Link></p>
                </form>
            </div>
            {/* <div className="min-h-screen flex flex-col justify-center items-center">
                <h2>Login Your Account</h2>
                <form className="card-body max-w-[752px]">
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default Login;