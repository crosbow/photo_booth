import { logo } from "../../assets";

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <img src={logo} alt="PhotoBooth" className="h-[51px]" />
    </div>
  );
};
export default Logo;
