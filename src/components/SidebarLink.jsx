import { NavLinkAdapter } from "../adapters/RouterAdapter";

export const SidebarLink = ({ text, href, onClick, activeLink }) => {
  return (
    <li>
      <NavLinkAdapter
        className={`inline-block w-full py-4 text-center transition duration-400 ${activeLink === text ? "border-l-4 bg-turqo-600" : "hover:bg-gray-600"} `}
        to={href}
        onClick={onClick}
      >
        {text}
      </NavLinkAdapter>
    </li>
  );
};
