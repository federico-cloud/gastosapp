import { Route, Routes } from "react-router";
import { DashboardLayout } from "./layouts";
import { Home, ManageExpenses } from "./pages";

export const App = () => {
  return (
    <Routes>
      {/* Rutas principales */}

      {/* Rutas del Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard/manage-expenses" element={<ManageExpenses />} />
      </Route>
    </Routes>
  );
};
