import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { AiOutlineHeart, TbShoppingCart, GrLanguage, FiLogOut, MdAddCircleOutline, FiSettings, BsCheckLg } from '../Icons'
import { useLogoutMutation } from '../feature/authApiSlice'
import { Props } from '../App'
import { spinner } from '../pages/AddProductPage'

type UserMenuProps = {
    setUserMenu: (value: boolean) => void, 
    user: boolean
} & Props
const UserMenu = ({ setUserMenu, user, setModal, setModalInfo }: UserMenuProps) => {
    const navigate = useNavigate()
    const { width } = useWindowSize();
    const [logout, { isLoading }] = useLogoutMutation()

    const handleLogout = async () => {
        setUserMenu(false)
        try{
            await logout('').unwrap();
            setModalInfo({
                text: 'Successfully logged out',
                icon: <BsCheckLg />,
                iconColor: 'text-green-500'
            })

            setTimeout(() => {
                setModalInfo({
                    text: '',
                    iconColor: '',
                    icon: null
                });
                setModal(false);
                navigate('/login')
            }, 1000)
        } catch(err) {
            setModalInfo({
                text: 'Cannot logout',
                icon: null,
                iconColor: ''
            })
        }
    }


    useEffect(() => {
        if(isLoading) {
            setModal(true);
            setModalInfo({
                text: 'Logging out...',
                icon: spinner,
                iconColor: ''
            })
        }
    }, [isLoading])
  return (
    <div className="absolute z-20 p-4 border flex flex-col gap-1 bg-white top-[80%] rounded-md text-lg shadow-sm right-8">
        {user 
        ? (<>
            {width! < 1024 && 
        <>
            <Link to='/wishlist'>
            <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><AiOutlineHeart /></span>
                <p>Wishlist</p>
            </button>
            </Link>
            <Link to='/mycart'>
            <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><TbShoppingCart /></span>
                <p>My Shopping cart</p>
            </button>
            </Link>
        </>
        }
        <Link to='/product/new'>
            <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><MdAddCircleOutline /></span>
                <p>Post New Product</p>
            </button>
        </Link>
        <Link to='/settings'>
            <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><FiSettings /></span>
                <p>Settings</p>
            </button>
        </Link>
        <button onClick={handleLogout} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
            <span><FiLogOut /></span>
            <p>Logout</p>
        </button>
        </>)
        : (<>
            <Link to='/register'>
            <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <p>Register</p>
            </button>
            </Link>
            <Link to='/login'>
                <button onClick={() => setUserMenu(false)} className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                    <p>Login</p>
                </button>
            </Link>        
        </>)
        }
    </div>
  )
}

export default UserMenu