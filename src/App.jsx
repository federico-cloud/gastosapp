import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './layouts/DashboardLayout';
import { Home } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};