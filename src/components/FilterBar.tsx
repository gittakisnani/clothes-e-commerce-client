import { IoTrashBinOutline, MdOutlineClose } from '../Icons'
import { CATEGORIES } from '../config/config';
import Logo from './Logo';
import useWindowSize from '../hooks/useWindowSize';
import TypeFilter from './TypeFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import PriceFilter from './PriceFilter';

const FilterBar = ({ setFilters } : { setFilters?: (value: boolean) => void}) => {
    const { width } = useWindowSize()
  return (
    <div className='fixed left-0 top-0 bottom-0 border-r z-40 w-[208px] overflow-y-auto lg:overscroll-y-none bg-white lg:relative lg:flex flex-col'>
        {width! < 1024 && <>
            <Logo />
        <button onClick={() => setFilters!(false)} className='absolute top-5 text-xl right-2' title='close'>
            <MdOutlineClose />
        </button>
        </>
        }
    <div className="md:w-[200px] border-primaryLight p-4">
        <div className="categories border-b border-primaryLight pb-4">
            <h3 className="text-black">Category</h3>
            <ul className="pl-6 mt-2 flex flex-col gap-2">
                {CATEGORIES.map((cat, index) => (
                    <li 
                    className="text-black/60 font-semibold hover:text-purplePrimary duration-300 ease-out transition-all cursor-pointer"
                    key={index}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex gap-2 flex-col py-4">
            <h3 className=''>Filter by:</h3>
            <TypeFilter />
            <ColorFilter />
            <SizeFilter />
            <PriceFilter />
            <div className="flex flex-col gap-2">
                <div className='form_actions flex items-center gap-2'>
                    <button className='flex-1 p-2 rounded-md text-white font-semibold bg-purplePrimary'>
                        Apply
                    </button>
                    <button title='reset' className='text-black/50 bg-secondaryLight border-black/50 border rounded-md p-2 self-stretch'>
                        <IoTrashBinOutline />
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FilterBar