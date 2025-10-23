import { Activity, use, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo2, LogoutIcon } from "../../assets";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import ProfileData from "./ProfileData";
import SidebarLinks from "./SidebarLinks";

const SideBar = () => {
  const { accessToken, setAuth } = use(AuthContext);
  const { api } = useAxios();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await api("/users/me");

        setAuth((prev) => ({ ...prev, user: response.data }));
      } catch (error) {
        console.log(error);
      }
    };

    if (accessToken) {
      loadUser();
    }
  }, [accessToken]);
  return (
    <aside className="hidden floating-navbar bg-white  border px-6 py-2 md:flex flex-col">
      <Link to="/" className="flex gap-2 items-center font-medium py-4 mb-8">
        <img src={logo2} alt="PhotoBooth" className="h-6 object-contain" />
        <h2 className="text-lg">Photo Booth</h2>
      </Link>

      <SidebarLinks />

      <Activity mode={accessToken ? "visible" : "hidden"}>
        <div className="flex  justify-between">
          <ProfileData />

          <button title="logout" className="">
            <LogoutIcon />
          </button>
        </div>
      </Activity>
    </aside>
  );
};
export default SideBar;
