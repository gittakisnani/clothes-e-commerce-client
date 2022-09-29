import { BsCheckAll, MdOutlineLocalShipping} from '../Icons'

const ProductServiceFeatures = () => {
  return (
    <>
        <div className='gap-2 flex p-2'>
            <span className='text-2xl'><BsCheckAll /></span>
            <p className='underline underline-offset-4'>
            PAY OVER TIME IN 4 INTEREST-FREE PAYMENTS & MORE FLEXIBLE OPTIONS WITH AFFIRM, KLARNA OR AFTERPAY
            </p>
        </div>
        <div className='gap-2 flex p-2'>
            <span className='text-2xl'><MdOutlineLocalShipping /></span>
            <p className='underline underline-offset-4'>
            JOIN ADIDAS CLUB TO GET UNLIMITED FREE STANDARD SHIPPING, RETURNS, & EXCHANGES
            </p>
        </div>
    </>
  )
}

export default ProductServiceFeatures