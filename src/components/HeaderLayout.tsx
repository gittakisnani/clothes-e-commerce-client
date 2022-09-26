import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import Header from './Header';
import FilterBar from './FilterBar';
import Container from './Conteiner';

const HeaderLayout = () => {
  const [filters, setFilters] = useState(false)
  const { width } = useWindowSize();

  useEffect(() => {
    setFilters(width! >= 1024 ? true : filters)
  }, [width])

  return (
    <>
    <Header setFilters={setFilters} />
    <Container className='flex'>
        {(filters || width! >= 1024 ) && <FilterBar setFilters={setFilters} />} 
        <Outlet />
    </Container>
    </>
  )
}

export default HeaderLayout