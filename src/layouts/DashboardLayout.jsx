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
          className="fixed z-10 p-2 text-white h-14 w-14 m-autotext-4xl top-6 left-6 hover:cursor-pointer hover:text-turqo-600"
          onClick={handleMenu}
        />
      ) : (
        <RxHamburgerMenu
          className="fixed z-10 p-2 m-auto text-4xl text-white bg-purple-500 h-14 w-14 top-6 left-6 hover:cursor-pointer hover:text-turqo-600"
          onClick={handleMenu}
        />
      )}
      <Sidebar displayMenu={displayMenu} />
      <main
        className={`w-full ${displayMenu ? "ml-64" : ""} bg-darkpurple-500`}
      >
        <Outlet />
      </main>
    </div>
  );
};
