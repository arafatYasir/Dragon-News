import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ResetPassword = () => {
    const { resetUserPassword } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        const email = e.target.email.value;

        resetUserPassword(email)
            .then(() => {
                setSuccessMessage("Password reset email sent!");
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="md:w-[752px] bg-white py-[70px] rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:w-[558px] mx-auto">
                        <label className="text-xl font-semibold text-[#403F3F] mb-4" htmlFor="email-field">Email Address</label>
                        <input className="placeholder-[#9F9F9F] bg-[#F3F3F3] text-[16px] py-5 pl-5 border-0 rounded-md" id="email-field" type="email" name="email" placeholder="Enter your email address" required />
                    </div>

                    <div className="md:w-[558px] mx-auto mt-2">
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {
                            successMessage && <p className="text-green-500">{successMessage}</p>
                        }
                    </div>

                    <div className="md:w-[558px] mx-auto mt-7">
                        <button className="w-full bg-[#403F3F] text-white text-xl font-semibold py-4 rounded-md cursor-pointer">Send Password Reset Mail</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;