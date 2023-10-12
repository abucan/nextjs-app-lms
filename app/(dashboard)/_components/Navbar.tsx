import NavbarRoutes from '@/components/NavbarRoutes';
import MobileSidebar from './MobileSidebar';

export const Navbar = () => {
  return (
    <div className='p-4 border-b flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
