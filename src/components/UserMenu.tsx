import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { AiOutlineHeart, TbShoppingCart, GrLanguage, FiLogOut, MdAddCircleOutline, FiSettings, BsCheckLg } from '../Icons'
import { useLogoutMutation } from '../feature/authApiSlice'
import Modal from './Modal'
import { spinner } from '../pages/AddProductPage'
const UserMenu = ({ setUserMenu }: { setUserMenu: (value: boolean) => void}) => {
    const navigate = useNavigate()
    const { width } = useWindowSize();
    const [logout, { isLoading }] = useLogoutMutation()
    const [modal, setModal] = useState(false);
    const [modalText, setModalText] = useState('')

    const handleLogout = async () => {
        setUserMenu(false)
        try{
            await logout('').unwrap();
            setModalText('Logged out')

            setInterval(() => {
                setModalText('');
                setModal(false);
                navigate('/login')
            })
        } catch(err) {
            setModalText('Cannot log out')
        }
    }


    useEffect(() => {
        if(isLoading) {
            setModal(true);
            setModalText('Logging out...')
        }
    }, [isLoading])
  return (
    <div className="absolute z-20 p-4 border flex flex-col gap-1 bg-white top-[80%] rounded-md text-lg shadow-sm right-8">
         {modal && <Modal setModal={setModal}>
          <div className='p-4 flex gap-2 text-xl items-center '>
            {modalText.includes('Logged') || modalText.includes('Cannot') ? <span className='text-green-500'><BsCheckLg /></span> : spinner}
            {modalText}
            </div>
            </Modal>}
        {width! < 1024 && 
        <>
            <div onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><AiOutlineHeart /></span>
                <p>Wishlist</p>
            </div>
            <div onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><TbShoppingCart /></span>
                <p>My Shopping cart</p>
            </div>
            <div onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><GrLanguage /></span>
                <p>Language</p>
            </div>
        </>
        }
        <Link to='/product/new'>
            <div onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><MdAddCircleOutline /></span>
                <p>Post New Product</p>
            </div>
        </Link>
        <Link to='/settings'>
            <div onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><FiSettings /></span>
                <p>Settings</p>
            </div>
        </Link>
        <div onClick={handleLogout} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
            <span><FiLogOut /></span>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default UserMenu