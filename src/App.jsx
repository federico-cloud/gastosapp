import { Route, Routes } from "react-router";
import { DashboardLayout } from "./layouts";
import { Home } from "./pages";

export const App = () => {
  return (
    <Routes>
      {/* Rutas del Dashboard */}
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
};
