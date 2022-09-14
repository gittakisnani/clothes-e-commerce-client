import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { AiOutlineHeart, TbShoppingCart, GrLanguage, FiLogOut, MdAddCircleOutline} from '../Icons'
const UserMenu = () => {
    const { width } = useWindowSize()
  return (
    <div className="absolute z-20 p-4 border flex flex-col gap-1 bg-white top-[80%] rounded-md text-lg shadow-sm right-8">
        {width! < 1024 && 
        <>
            <div className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><AiOutlineHeart /></span>
                <p>Wishlist</p>
            </div>
            <div className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><TbShoppingCart /></span>
                <p>My Shopping cart</p>
            </div>
            <div className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><GrLanguage /></span>
                <p>Language</p>
            </div>
        </>
        }
        <Link to='/product/new'>
            <div className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
                <span><MdAddCircleOutline /></span>
                <p>Post New Product</p>
            </div>
        </Link>
        <div className='duration-200 hover:bg-secondaryLight ease-linear flex items-center gap-2 p-2 cursor-pointer'>
            <span><FiLogOut /></span>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default UserMenu