import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        // clearing previous messages
        setErrorMessage("");

        // getting form values
        const form = new FormData(e.target);
        const name = form.get("name");
        const photoUrl = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const condition = form.get("condition");

        // checking name length
        if (name.length < 4) {
            setErrorMessage("Your name must contain at least 4 characters");
            return;
        }

        // checking passwords security
        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, , ?, &)");
            return;
        }

        // checking if condition is accepted
        if (!condition) {
            setErrorMessage("Please accept our terms and condition");
            return;
        }

        // creating a user
        createUser(email, password)
            .then(res => {
                // resetting form values
                e.target.reset();

                // updating users profile
                updateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        // sending user back to default page
                        navigate("/category/01");
                    })
                    .catch(error => {
                        setErrorMessage(error.message);
                    })


            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    setErrorMessage("The email address is already in use by another account");
                }
            })
    }

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="md:w-[752px] bg-white px-10 py-10 md:py-[70px] md:px-0 rounded-md">
                <h2 className="text-3xl md:text-4xl text-[#403F3F] font-semibold text-center">Register your account</h2>
                {/* line */}
                <div className="h-[1px] bg-[#E7E7E7] max-w-[606px] mx-auto my-10"></div>

                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:w-[558px] mx-auto">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="name-field">Your Name</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="name-field" type="text" name="name" placeholder="Enter your name" required />
                    </div>

                    <div className="flex flex-col md:w-[558px] mx-auto mt-6">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="photo-field">Photo URL <span className="text-red-500 textarea-md">(Optional)</span></label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="photo-field" type="text" name="photo" placeholder="Enter your photo url" />
                    </div>

                    <div className="flex flex-col md:w-[558px] mx-auto mt-6">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="email-field">Email</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="email-field" type="email" name="email" placeholder="Enter your email address" required />
                    </div>

                    <div className="flex flex-col md:w-[558px] mx-auto mt-6 relative">
                        <label className="text-lg md:text-xl font-semibold text-[#403F3F] mb-4" htmlFor="password-field">Password</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="password-field" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" required />
                        <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute left-[91%] md:left-[92%] top-[63%]">
                            {
                                showPassword ? <LuEyeClosed className="text-xl" /> : <FaEye className="text-xl" />
                            }
                        </button>
                    </div>

                    <div className="md:w-[558px] mx-auto mt-4">
                        <label className="label cursor-pointer">
                            <input type="checkbox" name="condition" className="checkbox" />
                            <span className="label-text">Accept our terms and conditions</span>
                        </label>
                    </div>

                    <div className="md:w-[558px] mx-auto mt-7">
                        <button className="w-full bg-[#403F3F] text-white text-lg md:text-xl font-semibold py-4 rounded-md cursor-pointer">Register</button>
                    </div>
                </form>

                <div className="md:w-[558px] mx-auto mt-2">
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;