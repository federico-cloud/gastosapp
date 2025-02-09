import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main className="w-full ml-64 bg-darkpurple-500">
        <Outlet />
      </main>
    </div>
  );
};
