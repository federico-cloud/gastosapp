import { NavLinkAdapter } from "../adapters/RouterAdapter";
import { IoExitOutline } from "react-icons/io5";

export const SidebarLink = ({ text, href, onClick, activeLink, icon }) => {
  return (
    <li className={`flex items-center w-full ${
          activeLink === text ? "border-l-4 bg-turqo-600" : "hover:bg-gray-600 "
        } hover:text-turqo-600 hover:cursor-pointer`}>
      <NavLinkAdapter
        className={`text-center transition duration-400 px-2 py-4 w-full text-xl`}
        to={href}
        onClick={onClick}
      >
        {text}
      </NavLinkAdapter>
      {icon}
    </li>
  );
};
