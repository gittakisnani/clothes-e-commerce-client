import { useRef, useState } from 'react'
import { TbShoppingCart, AiFillHeart, AiOutlineHeart, BsCheckAll} from '../Icons'
import SmallModal from './SmallModel'
const Product = ({ onClick } : { onClick?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [smallModelText, setSmallModelText] = useState('')
  const likeButtonRef = useRef<null | HTMLButtonElement>(null!)
  const cartButtonRef = useRef<null | HTMLButtonElement>(null!)
  const [liked, setLiked] = useState(false)

  const productClicked = (e :{ nativeEvent: {path: any[]}} ) => {
    const clicked = e.nativeEvent.path
    if(clicked.every(button => button !== likeButtonRef.current && button !== cartButtonRef.current)) {
      onClick!()
    }
  }

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
    <div onClick={productClicked} className="border rounded-md overflow-hidden relative">
      <SmallModal open={open} setOpen={setOpen}>
        <div className='flex items-center gap-2 text-lg'>
          <span className='text-2xl text-purplePrimary'><BsCheckAll /></span>
          <p>{smallModelText}</p>
        </div>
      </SmallModal>
      <div className='p-2 opacity-70 py-1 font-semibold text-sm rounded-md bg-purpleSecondary text-purplePrimary uppercase absolute top-4 left-4'>
        best seller
      </div>
      <button
      ref={likeButtonRef}
      onClick={likeButtonClicked}
      className='absolute top-4 right-4 text-2xl text-purplePrimary'
      title='Like | Unlike product'>
        {liked ? <AiFillHeart /> : <AiOutlineHeart/>}
      </button>
      <div className="image-wrapper">
        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a98a6e522934d3f964ead2400b45f9f_9366/Adicolor_Essentials_Trefoil_Hoodie_Beige_HE7198_21_model.jpg" alt="Product" />
      </div>
      <div className="details p-2">
        <h4 className="product-name text-lg font-medium">
          Line-Pattern Zipper Sweatshirt
        </h4>
        <div className="flex justify-between items-center pt-4">
          <div className="price-wrapper flex flex-col">
            <p className="text-primaryLight text-sm">Price</p>
            <p className="text-xl font-semibold">$200</p>
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