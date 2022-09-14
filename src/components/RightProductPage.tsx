import useWindowSize from '../hooks/useWindowSize'
import { AiFillStar } from '../Icons'
import ActionsProductPage from './ActionsProductPage'
import ProductServiceFeatures from './ProductServiceFeatures'
import Sizes from './Sizes'
const RightProductPage = () => {
    const { width } = useWindowSize()
  return (
    <div className="sticky top-0 h-fit p-4 pr-8 md:min-w-[300px] md:max-w-[300px] lg:min-w-[450px] lg:max-w-[450px]">

            {width! >= 1024 && 
                <>
                    <div className="flex items-center justify-between">
                        <p className='text-lg'>Men's • Sportswear</p>
                        <div className='flex text-xs items-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <p className='underline ml-2'>23</p>
                        </div>
                     </div>
                    <h2 className='italic py-2'>STADIUM FLEECE BADGE OF SPORT HOODIE</h2>
                    <p className="price font-bold ">$60</p>
                    <p className="color text-primaryLight py-2">White</p>
                </>
            }
            <Sizes />

            <ActionsProductPage />

            <ProductServiceFeatures />
        </div>
  )
}

export default RightProductPage