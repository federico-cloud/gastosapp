import { RouterAdapter } from "./adapters/";
import { DetailsMonthExpenses } from "./components";
import { DashboardLayout } from "./layouts/";
import { Home } from "./pages";

export const App = () => {
  const routes = [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        // Ruta index ("/dashboard")
        { path: "", element: <Home /> },
        // Ruta "/dashboard/view-expenses"
        {
          path: "view-expenses/:year/:month",
          element: <DetailsMonthExpenses />,
        },
      ],
    },
  ];

  return <RouterAdapter routes={routes} />;
};
