import { useState } from 'react'
import { SIZES } from '../config/config';

const Sizes = ({ sizes } : { sizes: string[]}) => {
    const [selectedSize, setSelectedSize] = useState<null | string>(null!)

    const handleSelectSize = (e: any) => setSelectedSize(e.target.textContent);
  return (
    <div>
        <p className='font-bold pb-2'>Size</p>
        <div className='flex flex-wrap gap-1'>
            {(sizes || SIZES).map(size => (
                <div
                onClick={handleSelectSize}
                key={size}
                className={'p-2 py-1 w-16 text-xl border-separate uppercase flex justify-center items-center border cursor-pointer' + ` ${size === selectedSize?.toLowerCase() ? ' bg-purplePrimary text-white' : ''}`}
                >{size}</div>
            ))}
        </div>
    </div>
  )
}

export default Sizes