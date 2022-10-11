import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import Header from './Header';
import FilterBar from './FilterBar';
import { useGetMeMutation, useGetUserByIdMutation } from '../feature/userApiSlice';
import { Props } from '../App';

const HeaderLayout = ({ setModal, setModalInfo }: Props) => {
  const [filters, setFilters] = useState(false)
  const [user, setUser] = useState(false)
  const { width } = useWindowSize();
  const [getMe] = useGetMeMutation();
  const [getByd] = useGetUserByIdMutation()

  useEffect(() => {
    setFilters(width! >= 1024 ? true : filters)
  }, [width])

  useEffect(() => {
    const getUser = async () => {
      try {
        const { _id } = await getMe('').unwrap();
        await getByd(_id).unwrap();
        setUser(true)
      } catch(err) {
        console.error(err)
      }
    }

    getUser()

  },[getByd, getMe])

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