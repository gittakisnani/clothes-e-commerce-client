import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import Header from './Header';
import FilterBar from './FilterBar';
import { Props } from '../App';
import { useGetMeQuery } from '../feature/userApiSlice';

const HeaderLayout = ({ setModal, setModalInfo }: Props) => {
  const [filters, setFilters] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const { width } = useWindowSize();
  const { data: me } = useGetMeQuery()  

  useEffect(() => {
    setFilters(width! >= 1024 ? true : filters)
  }, [filters, width])

  useEffect(() => {
    setLoggedIn(Boolean(me?._id))
  }, [me])

  return (
    <>
    <Header setFilters={setFilters} user={loggedIn} setModal={setModal} setModalInfo={setModalInfo} />
    <div className='flex'>
        {(filters || width! >= 1024 ) && <FilterBar setFilters={setFilters} />} 
        <Outlet />
    </div>
    </>
  )
}

export default HeaderLayout