import { useState } from 'react'
import { CATEGORIES, COLORS, SIZES, TYPE_FILTERS } from '../config/config';
const EditProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState<string[]>([])
  const [type, setType] = useState<string[]>([])
  const [size, setSize] = useState<string[]>();
  const [gender, cetGender] = useState<'Woman' | 'Man' | 'Unisex'>()
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState<number>(0)


  return (
    <div className='flex-1 p-4 md:p-6'>
        <h2 className=''>Edit Product</h2>
        <form className="flex flex-col gap-2">
           <label className="flex-col flex gap-2" htmlFor="title">
              Title:
              <input 
                id='title'
                title="Product title"
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='p-2'
            />
           </label>
           <label className="flex-col flex gap-2" htmlFor="desc">
              Description:
              <textarea 
                id='desc'
                title="Product Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='p-2 !min-h-[150px]'
            />
           </label>
            <div className='flex-col gap-2 flex'>
              <p>Colors:</p>
              <div className='flex gap-2 items-center flex-wrap'>
                {Object.entries(COLORS).map(([color, hex], index) => (
                 <label key={index} className='flex-col flex gap-2 items-center' htmlFor={hex}>
                  <p className='capitalize'>{color}</p>
                  <input 
                    id={hex}
                    name='color'
                    type="checkbox" 
                    title={color}
                    style={{accentColor: hex, borderColor: hex}}
                    className='!h-8 !w-8 !rounded-full'
                    value={hex}
                  />
                 </label>
                ))}
              </div>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p>Type:</p>
              <div className='flex flex-col gap-1'>
                {TYPE_FILTERS.map((type, index) => (
                  <label className='flex gap-2 items-center' key={index} htmlFor={type.replaceAll(' ', '')}>
                    <input 
                    id={type.replaceAll(' ', '')}
                    title={type}
                    value={type}
                    type="checkbox" 
                    />
                    <p className='capitalize'>{type}</p>
                  </label>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Category:</p>
              <div className='flex flex-col gap-1'>
                {CATEGORIES.map((category, index) => (
                  <label className='flex gap-2 items-center' key={index} htmlFor={category.replaceAll(' ', '')}>
                    <input 
                    id={category.replaceAll(' ', '')}
                    title={category}
                    value={category}
                    type="checkbox" 
                    />
                    <p className='capitalize'>{category}</p>
                  </label>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Sizes available:</p>
              <div className='flex flex-col gap-1'>
                {SIZES.map((size, index) => (
                  <label className='flex gap-2 items-center' key={index} htmlFor={size.replaceAll(' ', '')}>
                    <input 
                    id={size.replaceAll(' ', '')}
                    title={size}
                    value={size}
                    type="checkbox" 
                    />
                    <p className='uppercase'>{size}</p>
                  </label>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Gender:</p>
              <div className='flex flex-col gap-1'>
                {['Woman', 'Man', 'Unisex'].map((gender, index) => (
                  <label className='flex gap-2 items-center' key={index} htmlFor={gender.replaceAll(' ', '')}>
                    <input 
                    id={gender.replaceAll(' ', '')}
                    title={gender}
                    value={gender}
                    type="checkbox" 
                    />
                    <p className='capitalize'>{gender}</p>
                  </label>
                ))}
              </div>
            </div>
            </div>

              <label htmlFor="price" className='flex flex-col gap-2'>
                Price:
                <input 
                type="number" 
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                title='Price'
                className='max-w-[200px] p-2 rounded-md'
                />
              </label>
              <label htmlFor="files" className='flex flex-col gap-2 relative'>
                Images:
                <input
                id="files"
                type="file" 
                title='Images'
                className='file:p-2 file:bg-purplePrimary w-fit file:text-white file:border-none file:cursor-pointer file:rounded-md opacity-0'
                />
                <button 
                type='button'
                className='p-2 bg-purplePrimary text-white border-none font-semibold rounded-md w-fit absolute top-8 z-[-1]'
                >   
                    Add Pictures
                </button>
              </label>

              <div className='actions flex justify-end gap-2 items-center'>
                <button 
                  title='Discard changes'
                  className='bg-secondaryLight text-black font-semibold p-2 rounded-md border border-black'
                >
                  Discard changes
                </button>
                <button 
                  title='Save changes'
                  className='bg-purplePrimary text-white font-semibold p-2 rounded-md'
                >
                  Save changes
                </button>
            </div>
        </form>
    </div>
  )
}

export default EditProductPage