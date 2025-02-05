import { RouterAdapter } from "./adapters/RouterAdapter";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Home } from "./pages/Home";
import { ManageExpenses } from "./pages/ManageExpenses";

export const App = () => {
  const routes = [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        // Ruta index ("/dashboard")
        { path: "", element: <Home/> },
        // Ruta "/dashboard/manage-expenses"
        { path: "manage-expenses", element: <ManageExpenses /> },
      ],
    },
  ];

  return <RouterAdapter routes={routes} />;
};
