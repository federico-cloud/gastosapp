import { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import { SidebarProfile } from "./SidebarProfile";

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
          />
          <SidebarLink text="Gestionar ingresos" href="" />
          <SidebarLink text="Crear proyecto" href="" />
          <SidebarLink text="Crear grupo" href="" />
        </ul>

        {/* Botón de Cerrar Sesión al final */}
        <div className="mt-auto list-none">
          <SidebarLink text="Cerrar sesión" href="" />
        </div>
      </nav>
    </aside>
  );
};
