import { useState } from "react"
import { IoIosArrowUp, IoIosArrowDown} from '../Icons'
import { handleFilter } from "../utils/filters";


const PriceFilter = () => {
    const [price, setPrice] = useState(false);
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
  return (
    <>
        <div className="flex items-center justify-between">
            <p className="font-semibold">Price</p>
            <span
            className='cursor-pointer'
            onClick={() => handleFilter(price, setPrice)}
            >
                {price ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
        </div>
        {price && <div className='pl-4'>
        <div className='flex flex-col items-center gap-2'>
            <label 
            className='w-full flex flex-col gap-1'
            htmlFor="minPrice">
                Min:
            <input 
            id='minPrice'
            value={minPrice}
            onChange={e => setMinPrice(+e.target.value)}
            className='border border-purplePrimary caret-purplePrimary rounded-md p-2 max-w-full'
            type="number"
            />
            </label>
            <label 
            className='w-full flex flex-col gap-1'
            htmlFor="maxPrice">
                Max:
            <input 
            id='maxPrice'
            value={maxPrice}
            onChange={e => setMaxPrice(+e.target.value)}
            className='border border-purplePrimary caret-purplePrimary rounded-md p-2 max-w-full'
            type="number" 
            />
            </label>
        </div>
        </div>}
    </>
  )
}

export default PriceFilter