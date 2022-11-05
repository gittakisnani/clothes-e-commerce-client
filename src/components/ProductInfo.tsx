import { useState } from 'react'
import { DETAILS } from '../config/config';
import { IoIosArrowUp, IoIosArrowDown, } from '../Icons'

export interface ProductInfoProps {
    imgSrc: string
}

const ProductInfo = ({ imgSrc }: ProductInfoProps) => {
    const [highlights, setHighlights] = useState(false);
    const [description, setDescription] = useState(false);
    const [details, setDetails] = useState(false)
  return (
    <div className='p-4'>
                <div className='flex flex-col border-t'>
                    <div className='border-b'>
                        <div onClick={() => setHighlights(!highlights)} className='p-3 py-4 flex items-center gap-2 justify-between w-full relative'>
                            <h3>Highlights</h3>
                            <span className='cursor-pointer'>
                                {highlights ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {highlights && <div className='grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                            <div>
                                <h4 className='font-bold text-xl'>
                                WE PARTNER WITH THE BETTER COTTON INITIATIVE
                                </h4>
                                <p>By buying products marked with the Better Cotton Initiative logo, you're supporting more sustainable cotton farming.</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-xl'>
                                RIBBED DETAILS
                                </h4>
                                <p>Ribbed details give an extra comfortable feel.</p>
                            </div>
                            <div>
                                <h4 className='font-bold text-xl'>
                                SOFT FLEECE
                                </h4>
                                <p>Warm material blankets the body in comfort.</p>
                            </div>
                        </div>}
                    </div>
                    <div className='border-b'>
                        <div onClick={() => setDescription(!description)} className='p-3 py-4 flex items-center gap-2 justify-between w-full relative'>
                            <h3>Description</h3>
                            <span className='cursor-pointer'>
                                {description ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {description && <div className='grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 place-items-center'>
                                <div>
                                    <h4 className='text-xl md:text-2xl italic font-semibold pb-2'>
                                    A COZY FLEECE HOODIE FOR TOTAL RELAXATION.
                                    </h4>
                                    <p>There's are few things better than the feeling of accomplishment. Especially when you can sink into it supported by the comfort of soft fleece, like with this adidas hoodie . Reward hard work and sore muscles and give into the opposite of effort. Because this pullover is all about ease. Which is very deserved.</p>
                                </div>
                                <div>
                                    <img src={imgSrc} alt="Product" />
                                </div>
                        </div>}
                    </div>
                    <div className='border-b'>
                        <div onClick={() => setDetails(!details)} className='p-3 py-4 flex items-center gap-2 justify-between w-full relative'>
                            <h3>Details</h3>
                            <span className='cursor-pointer'>
                                {details ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {details && <ul className='py-4 grid grid-cols-1 sm:grid-cols-2'>
                            {DETAILS.map((detail, index) => (
                                <li className='flex items-start gap-2' key={index}><span>•</span>{detail}</li>
                            ))}
                        </ul>}
                    </div>
                </div>
            </div>
  )
}

export default ProductInfo