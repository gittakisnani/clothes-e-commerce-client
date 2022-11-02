import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { COLORS } from '../config/config';
import useWindowSize from '../hooks/useWindowSize';
import { AiFillStar, IoIosArrowDown, IoIosArrowUp } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils';
import ActionsProductPage from './ActionsProductPage';
import Product from './Product';
import ProductInfo from './ProductInfo';
import ProductServiceFeatures from './ProductServiceFeatures';
import RightProductPage from './RightProductPage';
import Sizes from './Sizes';

const ProductPage = ({ back = false } : { back?: boolean}) => {
    const [more, setMore] = useState(false);
    const { width } = useWindowSize();
    const handleShowMore = () => setMore(!more);
    const navigate = useNavigate()

    const handleBack = () => navigate(-1)

    useEffect(() => {
        setPageTitle('Product Page')
        handleMetaTags('Products page', 'With this page, users can see product details like: price, features, types, sizes...')
    },[])


  return (
    <section className='flex flex-1 w-full'>
        {/* Left */}
        <div className="image-desc flex-grow lg:border-r">
            {width! < 1024 && <div className='p-4'>
                <div className='flex justify-between mr-2'>
                    {back && <p onClick={handleBack} className='underline uppercase font-semibold cursor-pointer'>Back</p>}
                    <div className='flex items-center flex-1 justify-end'>
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
            </div>}
            {/* Images should be grid in medium sizes and slider in small devices   */}
            <div className="grid grid-cols-2 gap-[2px] relative">
                {width! >= 1024 && back && <p onClick={handleBack} className='absolute top-4 left-4 underline uppercase font-semibold cursor-pointer'>Back</p>}
                <div className="col-span-2">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>
                <div>
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>
                <div className='relative'>
                    <button 
                    onClick={handleShowMore}
                    className='absolute z-10 bottom-0 left-0 translate-y-1/2 -translate-x-1/2 border border-purplePrimary bg-secondaryLight p-2 flex gap-2 justify-between items-center'>
                        <p className='uppercase text-xl'>Show {more ? 'Less' : 'More'}</p>
                        <span>
                            {more ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </button>
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>
                {more && <div className="col-span-2">
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d5d36a32fd24b6e8c27aeb000432b4b_9366/Stadium_Fleece_Badge_of_Sport_Hoodie_White_HU1522_21_model.jpg" alt="" />
                </div>}
            </div>
            <ul className='bg-gray-100 border border-black/40 list-none mx-auto w-full md:w-[80%] mt-10 p-10 flex gap-2 justify-center items-center flex-wrap sticky bottom-2 z-10'>
                {Object.values(COLORS).map((color, index) => (
                    <Link key={index} to='/'>
                        <li 
                            className='w-[40px] h-[40px] rounded-full border'
                            key={index} 
                            style={{backgroundColor: color}}
                        ></li>
                    </Link>
                ))}
            </ul>
            {width! < 1024 && <div className='p-4'>
                <Sizes />
                <ActionsProductPage />
                <ProductServiceFeatures />
            </div> }

            <ProductInfo />

           <div className='p-4'>
                <h3 className='uppercase pb-4 font-bold'>You may also like</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {Array(10).fill('1').map((el, index) => (
                        <Product id={index} key={index} />
                    ))}
                </div>
           </div>
           <div className='p-4'>
                <h3 className='uppercase pb-4 font-bold'>Recently viewed</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {Array(10).fill('1').map((el, index) => (
                        <Product id={index} key={index} />
                    ))}
                </div>
           </div>
        </div>
        {/* Right */}
       {width! >= 1024 &&  <RightProductPage />}
    </section>
  )
}

export default ProductPage