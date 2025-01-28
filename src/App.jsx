import { Route, Routes } from "react-router";
import { DashboardLayout } from "./layouts";
import { Home } from "./pages";
import { ManageExpenses } from "./pages/ManageExpenses"; // Importa la nueva página

export const App = () => {
  return (
    <Routes>
      {/* Rutas principales */}
      <Route path="/" element={<Home />} />
      
      {/* Rutas del Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="manage-expenses" element={<ManageExpenses />} />
      </Route>
    </Routes>
  );
};

