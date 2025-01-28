import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
