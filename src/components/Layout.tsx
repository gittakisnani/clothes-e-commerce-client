import { Outlet } from 'react-router-dom';
import Container from './Conteiner';

const Layout = () => {
  return (
    <main className="bg-white">
      <Container className='relative'>
        <Outlet />
      </Container>
    </main>
  )
}

export default Layout