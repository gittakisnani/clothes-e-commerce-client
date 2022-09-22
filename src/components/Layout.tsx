import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="w-full max-w-[1400px] mx-auto relative bg-white">
      <Outlet />
    </main>
  )
}

export default Layout