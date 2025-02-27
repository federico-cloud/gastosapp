import { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import { SidebarProfile } from "./SidebarProfile";
import { MdOutlineGroupAdd } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { IoExitOutline, IoBuildOutline, IoHomeOutline } from "react-icons/io5";

export const Sidebar = ({ displayMenu }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col w-64 h-screen p-4 text-white bg-purple-500 transition-transform duration-300 ${
        displayMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="flex flex-col h-full">
        <SidebarProfile />
        <ul className="flex flex-col flex-grow">
          <SidebarLink
            text="Panel principal"
            href="/dashboard"
            onClick={handleClick}
            activeLink={activeLink}
            icon={<IoHomeOutline className="text-3xl" />}
          />
          <SidebarLink
            text="Gestionar ingresos"
            href=""
            icon={<GiMoneyStack className="text-3xl"/>}
          />
          <SidebarLink
            text="Crear proyecto"
            href=""
            icon={<IoBuildOutline className="text-3xl" />}
          />
          <SidebarLink
            text="Crear grupo"
            href=""
            icon={<MdOutlineGroupAdd className="text-3xl" />}
          />
        </ul>

        <div className="mt-auto list-none">
          <SidebarLink
            text="Cerrar sesión"
            href=""
            icon={<IoExitOutline className="text-3xl" />}
          />
        </div>
      </nav>
    </aside>
  );
};
