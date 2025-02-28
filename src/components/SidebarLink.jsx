import { NavLinkAdapter } from "../adapters/RouterAdapter";

export const SidebarLink = ({ text, href, onClick, activeLink, icon }) => {
  return (
    <li className={`flex items-center w-full p-2 ${
          activeLink === text ? "border-l-4 bg-turqo-600" : "hover:bg-gray-600 text-white"
        } hover:cursor-pointer`}>
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
