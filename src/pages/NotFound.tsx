import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Conteiner'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils'

const NotFound = () => {
    useEffect(() => {
        setPageTitle('404 | Not Found')
        handleMetaTags('Not found, 404, error', 'The page you are looking for does not exist')
    },[])
  return (
    <>
    <header className='bg-white shadow-2xl shadow-purplePrimary/10 fixed top-0 right-0 left-0'>
        <Container className='flex items-center justify-center p-4'>
            <Link to='/'><p className="text-2xl">Taki<span className="font-bold">Snani</span></p></Link>
        </Container>
    </header>
    <main className='h-screen flex items-center justify-center gap-4 flex-col'>
        <h2 className='text-6xl md:text-9xl font-bold md:font-extrabold text-purplePrimary -tracking-[1.2rem]'>
        4😔4
        </h2>
        <p className='text-lg font-semibold text-purplePrimary max-w-[500px] text-center'>
            The page you are looking for have been removed, had its name changed or temporarily unavailable.
        </p>
        <Link to='/'>
            <button className='p-2 px-16 font-semibold text-lg bg-purplePrimary text-white'>
                Home
            </button>
        </Link>
    </main>
    </>
  )
}

export default NotFound