import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export const DashboardLayout = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="flex w-full h-full p-2">
      {displayMenu ? (
        <MdClose
          className="fixed z-10 m-auto text-4xl text-white hover:cursor-pointer"
          onClick={handleMenu}
        />
      ) : (
        <RxHamburgerMenu
          className="fixed z-10 m-auto text-4xl text-white hover:cursor-pointer"
          onClick={handleMenu}
        />
      )}
      <Sidebar displayMenu={displayMenu} />
      <main className="w-full ml-64 bg-darkpurple-500">
        <Outlet />
      </main>
    </div>
  );
};
