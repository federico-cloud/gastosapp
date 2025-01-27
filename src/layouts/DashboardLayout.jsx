import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="w-full h-full bg-amber-300">
      <Sidebar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};
