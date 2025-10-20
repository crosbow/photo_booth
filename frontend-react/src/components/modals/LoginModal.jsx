import { Link } from "react-router-dom";

const LoginModal = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <h3 className="text-xl font-semibold text-center mb-2">
        Login to access more posts
      </h3>
      <Link to="/login" className="primary-button mb-3 text-center">
        Go Login
      </Link>
      <Link to="/register" className="primary-button mb-3 text-center">
        Go Register
      </Link>
    </div>
  );
};
export default LoginModal;
