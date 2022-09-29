import { TbShoppingCart, AiOutlineHeart, BsCheckAll} from '../Icons'
import { useState } from 'react'
import SmallModal from './SmallModel';


const ActionsProductPage = () => {
    const [open, setOpen] = useState(false)
    const [smallModelText, setSmallModelText] = useState('');

    const likeButtonClicked = () => {
        setSmallModelText('Product added successfully to your wishlist!');
        setOpen(true)
    }
    
    const addToCartClicked = () => {
    setSmallModelText('Product added successfully to your cart!')
    setOpen(true)
    }

    
  return (
    <div className='flex items-center gap-2 justify-between my-4'>
            <SmallModal open={open} setOpen={setOpen}>
                <div className='flex items-center gap-2 text-lg'>
                    <span className='text-2xl text-purplePrimary'><BsCheckAll /></span>
                    <p>{smallModelText}</p>
                </div>
            </SmallModal>
        <div className='flex-1 border border-purplePrimary'>
            <button     
                onClick={addToCartClicked}
                className='flex-1 bg-purplePrimary text-white flex justify-between items-center gap-2 p-3 w-full -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0'>
                <p>Add to bag</p>
                <span className='text-xl'><TbShoppingCart /></span>
            </button>
        </div>
        <button 
            onClick={likeButtonClicked}
            className='border border-primaryLight p-3 self-stretch text-xl'>
            <AiOutlineHeart />
        </button>
    </div>
  )
}

export default ActionsProductPage