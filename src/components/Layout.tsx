import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto relative">
      <Outlet />
    </div>
  )
}

export default Layout