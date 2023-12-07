import { Outlet } from 'react-router';
import { Header } from '@/components';

export default function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}
