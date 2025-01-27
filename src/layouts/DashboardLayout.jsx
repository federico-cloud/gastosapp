import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout = () => {
  return (
    <div className='bg-amber-300 w-full h-full'>
      <Sidebar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
};