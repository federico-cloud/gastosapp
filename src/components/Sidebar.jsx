import { useState } from "react";
import { SidebarLink } from "./SidebarLink";
import { SidebarProfile } from "./SidebarProfile";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <aside className="fixed top-0 left-0 flex flex-col w-64 h-screen text-white bg-purple-500">
      <nav>
        <SidebarProfile />
        <ul>
          <SidebarLink
            text="Panel principal"
            href="/dashboard"
            isActive={activeLink === "Panel principal"}
            onClick={() => setActiveLink("Panel principal")}
          />
          <SidebarLink
            text="Gestionar gastos"
            href="/dashboard/manage-expenses"
            isActive={activeLink === "Gestionar gastos"}
            onClick={() => setActiveLink("Gestionar gastos")}
          />
          <SidebarLink
            text="Gestionar ingresos"
            href=""
            isActive={activeLink === "Gestionar ingresos"}
            onClick={() => setActiveLink("Gestionar ingresos")}
          />
        </ul>
      </nav>
    </aside>
  );
};
