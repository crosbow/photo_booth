import { Link } from "react-router-dom";
import { logo2 } from "../assets";
import RegisterForm from "../components/auth/RegisterForm";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="signup-container">
        {/* PhotoBooth Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo2} alt="PhotoBooth" className="h-[51px]" />
        </div>
        <RegisterForm />

        <div className="bg-white p-6 border border-gray-300 text-center mb-4 rounded-md">
          <p className="text-sm">
            Already Have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
