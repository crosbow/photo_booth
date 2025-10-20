import { Outlet } from "react-router-dom";
import SideBar from "./components/common/SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />

      <Outlet />
    </>
  );
};
export default Layout;
