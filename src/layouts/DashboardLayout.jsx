import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <main className="w-full ml-64">
        <Outlet />
      </main>
    </div>
  );
};
