import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getFilters, setPrices } from "../feature/filtersSlice";
import { IoIosArrowUp, IoIosArrowDown} from '../Icons'
import { handleFilter } from "../utils/filters";


const PriceFilter = () => {
    const [price, setPrice] = useState(false);
    const filters = useSelector(getFilters);
    const dispatch = useDispatch();

    const handlePriceFilter = (key: 'maxPrice' | 'minPrice',value: number) => {
        dispatch(setPrices({ key, value}))
    }
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
            value={filters.minPrice || 0}
            onChange={(e) => handlePriceFilter('minPrice', Number(e.target.value))}
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
            value={filters.maxPrice}
            onChange={e => handlePriceFilter('maxPrice', Number(e.target.value))}
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