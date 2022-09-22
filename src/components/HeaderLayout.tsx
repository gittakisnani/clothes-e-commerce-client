import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import Header from './Header';
import FilterBar from './FilterBar';
import { handleMetaTags, setPageTitle } from '../utils/pageUtils';

const HeaderLayout = () => {
  const [filters, setFilters] = useState(false)
  const { width } = useWindowSize();

  useEffect(() => {
    setFilters(width! >= 1024 ? true : filters)
  }, [width])

  useEffect(() => {
    setPageTitle('TakiSnani | Homepage')
    handleMetaTags('TakiSnani HomePage', 'With this page sellers, registered or unregistered users can browse our products')
  },[])
  return (
    <>
    <Header setFilters={setFilters} />
    <div className='flex'>
        {(filters || width! >= 1024 ) && <FilterBar setFilters={setFilters} />} 
        <Outlet />
    </div>
    </>
  )
}

export default HeaderLayout