import { useState } from "react"
import { COLORS } from "../config/config";
import { IoIosArrowUp, IoIosArrowDown} from '../Icons'
import { handleFilter } from "../utils/filters";
import { useSelector, useDispatch } from 'react-redux';
import { getFilters, setFilters } from '../feature/filtersSlice';
const ColorFilter = () => {
    const [color, setColor] = useState(false);
    const filters = useSelector(getFilters);
    const dispatch = useDispatch();

    const handleColorFilter = (value: string) => {
        dispatch(setFilters({ filter: 'color', value}))
    }
  return (
    <>
        <div className="flex items-center justify-between">
            <p className="font-semibold">Color</p>
            <span
            className='cursor-pointer'
            onClick={() => handleFilter(color, setColor)}
            >
                {color ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
        </div>
        {color && <div className='color_filters pl-4'>
            {Object.entries(COLORS).map(([color, hex]) => (
                <label 
                htmlFor={color}
                key={hex || '1'}
                className='flex items-center gap-2'
                >
                    <input 
                    id={color}
                    type="checkbox" 
                    checked={filters.color.indexOf(color) !== -1}
                    onChange={() => handleColorFilter(color)}
                    />

                    <div className='flex items-center gap-1'>
                        <span className='capitalize'>{color}</span>
                        <span
                        style={{backgroundColor: hex && hex}}
                        className={'h-2 w-6 rounded-md ' + color}
                        ></span>
                    </div>
                </label>
            ))}
        </div>}     
    </>
  )
}

export default ColorFilter