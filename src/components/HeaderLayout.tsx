import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import Header from './Header';
import FilterBar from './FilterBar';
import { Props } from '../App';
import { useGetMeMutation } from '../feature/userApiSlice';

const HeaderLayout = ({ setModal, setModalInfo }: Props) => {
  const [filters, setFilters] = useState(false)
  const { width } = useWindowSize();
  const [user, setUser] = useState(false);
  const [getMe] = useGetMeMutation()  


  useEffect(() => {
    const getUser = async () => {
      try {
        await getMe('').unwrap();
        setUser(true)
      } catch(err) {
        console.error(err)
      }
    }

    getUser()

  },[])


  useEffect(() => {
    setFilters(width! >= 1024 ? true : filters)
  }, [width])

  return (
    <>
    <Header setFilters={setFilters} user={user} setModal={setModal} setModalInfo={setModalInfo} />
    <div className='flex'>
        {(filters || width! >= 1024 ) && <FilterBar setFilters={setFilters} />} 
        <Outlet />
    </div>
    </>
  )
}

export default HeaderLayout