import { useRef, useState } from 'react'
import { TbShoppingCart, AiFillHeart, AiOutlineHeart, BsCheckAll } from '../Icons'
import SmallModal from './SmallModel'
import { Link } from 'react-router-dom'

export interface ProductProps {
  id: number, 
  imgSrc: string,
  price: number,
  oldPrice?: number,
  bestSeller: boolean,
  title: string
  similars?: number[]
  sizes?: string[]
}

const Product = ({ id, imgSrc, price, oldPrice, bestSeller, title }: ProductProps) => {

  const [open, setOpen] = useState(false);
  const [smallModelText, setSmallModelText] = useState('')
  const [liked, setLiked] = useState(false);
  const likeButtonRef = useRef<null | HTMLButtonElement>(null!)
  const cartButtonRef = useRef<null | HTMLButtonElement>(null!)

  const likeButtonClicked = () => {
    setSmallModelText(`Product ${liked ? "removed" : "added"} successfully ${liked ? "from" : "to"} your wishlist!`);
    setLiked(!liked)
    setOpen(true)
  }

  const addToCartClicked = () => {
    setSmallModelText('Product added successfully to your cart!')
    setOpen(true)
  }



  return (
    // @ts-ignore
    <div className="border rounded-md overflow-hidden relative">
      <SmallModal open={open} setOpen={setOpen}>
        <div className='flex items-center gap-2 text-lg'>
          <span className='text-2xl text-purplePrimary'><BsCheckAll /></span>
          <p>{smallModelText}</p>
        </div>
      </SmallModal>
      {bestSeller && <div className='p-2 opacity-70 py-1 font-semibold text-sm rounded-md bg-purpleSecondary text-purplePrimary uppercase absolute top-4 left-4'>
        best seller
      </div>}
      <button
      ref={likeButtonRef}
      onClick={likeButtonClicked}
      className='absolute top-4 right-4 text-2xl text-purplePrimary active:scale-[1.4] duration-300 ease-linear'
      title='Like | Unlike product'>
        {liked ? <AiFillHeart /> : <AiOutlineHeart/>}
      </button>
      <div className="image-wrapper">
        <img src={imgSrc} alt="Product" />
      </div>
      <div className="details p-2">
          <Link to={'product?product=' + id}>
            <h4 className="product-name text-lg font-medium">
              {title}
            </h4>
          </Link>
        <div className="flex justify-between items-center pt-4">
          <div className="price-wrapper flex flex-col">
            <p className="text-primaryLight text-sm">Price</p>
            <p className="text-xl font-semibold">${price}</p>
          </div>
          <button 
          ref={cartButtonRef}
          onClick={addToCartClicked}
          title='Add to shopping cart'
          className="cart-wrapper p-2 bg-purplePrimary text-white text-[22px] rounded-md">
            <TbShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product