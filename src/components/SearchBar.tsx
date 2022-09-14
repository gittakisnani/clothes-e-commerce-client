import { useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { RiSearchLine, MdOutlineClose, AiOutlineFilter } from '../Icons'

type SearchBarProps = {
    onBlur: () => void
    setFilters: (value: boolean) => void
}

const SearchBar = ({ onBlur, setFilters } : SearchBarProps) => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [search, setSearch] = useState('')
    const handleClearSearch = () => setSearch('');
    const { width } = useWindowSize()

  return (
    <form ref={formRef} className="p-2 rounded-md flex items-center gap-2 bg-secondaryLight w-full md:max-w-[340px] md:focus-within:max-w-[480px] duration-300 ease-in-out mx-auto">
        <button className="text-primaryLight text-xl" title="Search">
            <RiSearchLine />
        </button>
        <div className="flex-1 flex">
            <input 
            onBlur={onBlur}
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search among 100+ products"
            className="p-1 flex-1 !border-none"
            autoComplete="off"
            accessKey='S'
            />
            {search && <button 
            onClick={handleClearSearch}
            type="button"
            className="text-xl"
            title="Clear"
            >
                <MdOutlineClose />
            </button>}
        </div>

        {width! >= 1024 && <span className="bg-white grid place-items-center p-2 rounded-md text-primaryLight justify-self-end text-sm">
            Alt S
        </span>}

            {width! < 1024 && <button type='button'  onClick={() => setFilters(true)} className='p-2 bg-purplePrimary text-white text-xl rounded-md' title='Filter Searches'>
                <AiOutlineFilter color='white' />
            </button>}
    </form>
  )
}

export default SearchBar