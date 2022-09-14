import { useState } from "react"
import { IoIosArrowUp, IoIosArrowDown} from '../Icons'
import { handleFilter } from "../utils/filters";
import { TYPE_FILTERS } from "../config/config";
const TypeFilter = () => {
    const [type, setType] = useState(false);
  return (
    <>
        <div className="flex items-center justify-between">
            <p className="font-semibold">Type</p>
            <span
            className='cursor-pointer'
            onClick={() => handleFilter(type, setType)}
            >
                {type ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
        </div>
        {type && <div className='type_filters pl-4'>
            {TYPE_FILTERS.map((typeFilter, index) => (
                <label 
                htmlFor={typeFilter.toLowerCase()} 
                key={index}
                className='flex gap-2 items-center'
                >
                    <input 
                    type="checkbox" 
                    id={typeFilter.toLowerCase()} 
                    />
                    {typeFilter}
                </label>
            ))}
        </div>}
    </>
  )
}

export default TypeFilter