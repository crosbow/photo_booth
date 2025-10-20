import { use } from "react";
import { NavLink } from "react-router-dom";
import { sideBarLinks } from "../../constants";
import { AuthContext } from "../../providers/AuthProvider";

const SidebarLinks = () => {
  const { accessToken } = use(AuthContext);

  const navLinks = accessToken ? sideBarLinks : [sideBarLinks[0]];

  return (
    <ul className="space-y-8 flex-1">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center gap-2 bg-gray-200 rounded-md  py-2 px-3"
              : "flex flex-row items-center gap-2 px-3 py-2"
          }
        >
          <link.icon />
          <span className="text-sm text-zinc-800">{link.label}</span>
        </NavLink>
      ))}
    </ul>
  );
};
export default SidebarLinks;
