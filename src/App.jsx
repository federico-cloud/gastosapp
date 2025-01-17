import { Routes, Route } from 'react-router-dom'; // Importa los componentes de rutas
import { Home } from './pages/Home'; // Página principal
import { Dashboard } from './pages/Dashboard'; // Panel de control

export const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} /> {/* Ruta para la página principal */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el Dashboard */}
    </Routes>
  );
};