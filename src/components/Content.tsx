import { useState, useEffect } from 'react'
import { URLSearchParams } from 'url'
import { SORTS } from '../config/config'
import { HiOutlineHome, AiOutlineRight, MdSort, BsCheckLg, MdOutlineClose } from '../Icons'
import { SortsType } from '../types/types'
import Filter from './Filter'
import Modal from './Modal'
import Product from './Product'
import ProductPage from './ProductPage'
import { Link,  } from 'react-router-dom'

const Content = () => {
  const [sort, setSort] = useState(false)
  const [sortMethod, setSortMethod] = useState('Most Popular')
  const [modal, setModal] = useState(false) 

  const onClick= () => setModal(!modal)

  const handleChangeSortMethod = (sort: SortsType) => {
    setSortMethod(sort);
  }


  return (
      <div className='p-4 md:p-6 flex-1'>
          {modal && <Modal setModal={setModal}>
              <button 
              onClick={() => {
                onClick()
                // eslint-disable-next-line no-restricted-globals
                history.replaceState(null, '', '/')
              }}
              title='Close Portal'
              className='sticky text-xl top-1 float-right bg-white z-20 text-black'>
                <MdOutlineClose />
              </button>
              <ProductPage />
          </Modal>
        }
        <div className='flex items-center gap-2 text-2xl'>
            <span><HiOutlineHome /></span>
            <div className='path flex gap-1 items-center text-black/40 text-sm md:text-base'>
                <p className='text-black/80'>Main Page</p>
                <span><AiOutlineRight /></span>
                <p>Category</p>
                <span><AiOutlineRight /></span>
                <p>Category Selected</p>
            </div>
        </div>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
        <div>
        <h2 className='text-2xl mt-4 md:mt-8 font-bold'>Category</h2>

        <div className='mt-2 md:mt-4 flex items-center flex-wrap gap-2'>
            <Filter filter='multicolor' />
            <Filter filter='multicolor' />
            <Filter filter='multicolor' />
        </div>
        </div>
        <div
        onClick={() => setSort(!sort)}
        className='bg-secondaryLight self-end md:self-auto p-3 text-primaryLight rounded-md flex items-center justify-between gap-4 relative w-[240px]'>
            Sort by: {sortMethod}

            <span className='text-xl'><MdSort /></span>

            {sort && 
            <div className='absolute z-10 w-full left-0 top-[100%] my-2 bg-secondaryLight flex flex-col gap-1 p-2 text-primaryLight'>
                {SORTS.map((sort, index) => (
                  <div 
                  key={index}
                  onClick={() => handleChangeSortMethod(sort)}
                  className='flex items-center justify-between gap-2 cursor-pointer'>
                      <p>{sort}</p>
                      {sortMethod === sort && <span><BsCheckLg /></span>}
                  </div>
                ))}
              </div>
              }
        </div>
        </div>
        <div className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4'>
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
          <Product onClick={() => {
            onClick();
            window.history.replaceState(null, '', '/product/2')
          }} />
        </div>
      </div>
  )
}

export default Content