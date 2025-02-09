import { RouterAdapter } from "./adapters/";
import { DashboardLayout } from "./layouts/";
import { Home, ManageExpenses } from "./pages";

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
