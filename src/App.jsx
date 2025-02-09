import { RouterAdapter } from "./adapters/";
import { DetailsMonthExpenses } from "./components";
import { DashboardLayout } from "./layouts/";
import { Home, ManageExpenses } from "./pages";

export const App = () => {
  const routes = [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        // Ruta index ("/dashboard")
        { path: "", element: <Home /> },
        // Ruta "/dashboard/manage-expenses"
        { path: "manage-expenses", element: <ManageExpenses /> },
        {
          path: "view-expenses/:year/:month",
          element: <DetailsMonthExpenses />,
        },
      ],
    },
  ];

  return <RouterAdapter routes={routes} />;
};
