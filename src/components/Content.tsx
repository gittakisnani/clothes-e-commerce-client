import { useState } from 'react'
import { SORTS } from '../config/config'
import { HiOutlineHome, AiOutlineRight, MdSort, BsCheckLg, MdOutlineClose } from '../Icons'
import { SortsType } from '../types/types'
import Modal from './Modal'
import Product from './Product'
import ProductPage from './ProductPage'
import { useSelector } from 'react-redux'
import { getFilters } from '../feature/filtersSlice'
import Filter from './Filter'

const Content = () => {
  const [sort, setSort] = useState(false)
  const [sortMethod, setSortMethod] = useState('Most Popular')
  const filters = useSelector(getFilters)

  const handleChangeSortMethod = (sort: SortsType) => {
    setSortMethod(sort);
  }


  return (
      <section className='p-4 md:p-6 flex-1'>
        <div className='flex items-center gap-2 text-2xl'>
            <span><HiOutlineHome /></span>
            <div className='path flex gap-1 items-center text-black/40 text-sm md:text-base'>
                <p className='text-black/80'>Main Page</p>
                <span><AiOutlineRight /></span>
                <p>Category</p>
                <span><AiOutlineRight /></span>
                <p>{filters.cat || 'All products'}</p>
            </div>
        </div>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
        <div>
        <h2 className='text-2xl mt-4 md:mt-8 font-bold'>{filters.cat || 'All products'}: {filters.search}</h2>

        <div className='mt-2 md:mt-4 flex items-center flex-wrap gap-2'>
            {(filters.type as string[]).map((filter, index) => (
              <Filter filter={filter} key={index} />
            ))}
            {(filters.color as string[]).map((filter, index) => (
              <Filter filter={filter} key={index} />
            ))}
            {(filters.size as string[]).map((filter, index) => (
              <Filter filter={filter} key={index} />
            ))}
        </div>
        </div>
        <div
        onClick={() => setSort(!sort)}
        className='bg-secondaryLight self-end md:self-auto p-3 text-black/50 rounded-md flex items-center justify-between gap-4 relative w-[240px]'>
            Sort by: {sortMethod}

            <span className='text-xl'><MdSort /></span>

            {sort && 
            <div className='absolute z-10 w-full left-0 top-[100%] my-2 bg-secondaryLight flex flex-col gap-1 p-4 text-primaryLight shadow-2xl'>
                {SORTS.map((sort, index) => (
                  <div 
                  key={index}
                  onClick={() => handleChangeSortMethod(sort)}
                  className='flex items-center justify-between gap-2 cursor-pointer text-black'>
                      <p>{sort}</p>
                      {sortMethod === sort && <span><BsCheckLg /></span>}
                  </div>
                ))}
              </div>
              }
        </div>
        </div>
        <div className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4'>
          {Array(10).fill('el').map((el, index) => (
            <Product key={index} id={index} />
          ))}
        </div>
      </section>
  )
}

export default Content