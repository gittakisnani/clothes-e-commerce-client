import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { COLORS } from '../config/config';
import products from '../data/products';
import useWindowSize from '../hooks/useWindowSize';
import { AiFillStar, IoIosArrowDown, IoIosArrowUp } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils';
import ActionsProductPage from './ActionsProductPage';
import Product, { ProductProps } from './Product';
import ProductInfo from './ProductInfo';
import ProductServiceFeatures from './ProductServiceFeatures';
import RightProductPage from './RightProductPage';
import Sizes from './Sizes';


interface ProductPageProps {
    back?: boolean
    id?: string | null
}




const ProductPage = ({ back = false, id } : ProductPageProps) => {
    const [more, setMore] = useState(false);
    const { width } = useWindowSize();
    const handleShowMore = () => setMore(!more);
    const navigate = useNavigate()
    const { id: productId = id } = useParams();
    const [product, setProduct] = useState<ProductProps>()
    const handleBack = () => navigate(-1)

    useEffect(() => {
        setProduct(products.find(pr => pr.id === Number(productId)))
        setPageTitle('Product Page')
        handleMetaTags('Products page', 'With this page, users can see product details like: price, features, types, sizes...')
    }, [id, productId])


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
                <p className="price font-bold ">${product?.price}</p>
            </div>}
            {/* Images should be grid in medium sizes and slider in small devices   */}
            <div className="grid grid-cols-2 gap-[2px] relative">
                {width! >= 1024 && back && <p onClick={handleBack} className='absolute top-4 left-4 underline uppercase font-semibold cursor-pointer'>Back</p>}
                <div className="col-span-2">
                    <img src={product?.imgSrc} alt={product?.title} />
                </div>
                <div>
                    <img src={product?.imgSrc} alt={product?.title} />
                </div>
                <div>
                    <img src={product?.imgSrc} alt={product?.title} />
                </div>
                <div>
                    <img src={product?.imgSrc} alt={product?.title} />
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
                    <img src={product?.imgSrc} alt={product?.title} />
                </div>
                {more && <div className="col-span-2">
                    <img src={product?.imgSrc} alt={product?.title} />
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
                <Sizes sizes={product?.sizes!} />
                <ActionsProductPage />
                <ProductServiceFeatures />
            </div> }

            <ProductInfo imgSrc={product?.imgSrc!} />

           <div className='p-4'>
                <h3 className='uppercase pb-4 font-bold'>You may also like</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {product?.similars?.map(id => (products.find(pr => pr.id === id))).map(pr => (
                        <Product {...pr!} key={pr?.id} />
                    ))}
                </div>
           </div>
           <div className='p-4'>
                <h3 className='uppercase pb-4 font-bold'>Recently viewed</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {product?.similars?.map(id => (products.find(pr => pr.id === id))).map(pr => (
                        <Product {...pr!} key={pr?.id} />
                    ))}
                </div>
           </div>
        </div>
        {/* Right */}
       {width! >= 1024 &&  <RightProductPage sizes={product?.sizes!} price={product?.price!} />}
    </section>
  )
}

export default ProductPage