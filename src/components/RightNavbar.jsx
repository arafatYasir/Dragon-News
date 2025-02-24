import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";
import { toast, ToastContainer } from "react-toastify";

const RightNavbar = () => {
    const warningToast = () => {
        toast.error('A user is already logged in', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <SocialLogin warningToast={warningToast} />
            <FindUs />
            <ToastContainer />
        </div>
    );
};

export default RightNavbar;