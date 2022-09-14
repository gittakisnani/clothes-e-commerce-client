import { useState } from "react"
import { SIZES } from "../config/config";
import { IoIosArrowUp, IoIosArrowDown} from '../Icons'
import { handleFilter } from "../utils/filters";


const SizeFilter = () => {
    const [size, setSize] = useState(false);

  return (
    <>
        <div className="flex items-center justify-between">
            <p className="font-semibold">Size</p>
            <span
            className='cursor-pointer'
            onClick={() => handleFilter(size, setSize)}
            >
                {size ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
        </div>
        {size && <div className='type_filters pl-4'>
        {SIZES.map((size, index) => (
                <label 
                htmlFor={size.toLowerCase()} 
                key={index}
                className='flex gap-2 items-center'
                >
                    <input 
                    type="checkbox" 
                    id={size.toLowerCase()} 
                    />
                    {size.toUpperCase()}
                </label>
            ))}
        </div>}
    </>
  )
}

export default SizeFilter