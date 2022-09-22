import { useState, useRef, useEffect } from 'react'
import { CATEGORIES, COLORS, SIZES, TYPE_FILTERS } from '../config/config';
import { IoTrashBinOutline, AiFillInfoCircle } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils';
const AddProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState<string[]>([])
  const [type, setType] = useState<string[]>([])
  const [size, setSize] = useState<string[]>();
  const [gender, cetGender] = useState<'Woman' | 'Man' | 'Unisex'>()
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)
  const [src, setSrc] = useState<string[]>([])
  const fileRef = useRef<HTMLInputElement | null>(null!)
  

  const previewFiles = () => {
    const files = fileRef.current?.files!
    const reader = new FileReader();

    reader.onloadend = () => setSrc([...src, String(reader.result)]);

    for(let i = 0; i < files.length; i++) {
      if(files[i]) {
        reader.readAsDataURL(files[i])
      } else {
        setSrc([])
      }
    }
  }

  const handleDelete = (imgSrc: string) => {
    setSrc(src.filter(el => el !== imgSrc))
  }


  useEffect(() => {
    setPageTitle('New Product')
    handleMetaTags('Add new product page', 'With this page sellers can add their products and offer them to buyers')
  },[])


  return (
    <div className='flex-1 p-4 md:p-6'>
        <h2 className=''>Post New Product</h2>
        <h4 className='flex bg-red-300 text-red-600 gap-2 items-center font-semibold p-2 my-2 text-lg'>
            <span className='text-xl'><AiFillInfoCircle /></span>
            <p>An error ocurred</p>
        </h4>
        <form className="flex flex-col gap-2">
           <label className="flex-col flex gap-2" htmlFor="title">
              <p className='text-lg font-semibold'>Title:</p>
              <input 
                id='title'
                title="Product title"
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='p-2'
            />
            <p className='text-gray-600 font-semibold'>You Title Should match the product you're offering.</p>
           </label>
           <label className="flex-col flex gap-2" htmlFor="desc">
           <p className='text-lg font-semibold'>Description:</p>
              <textarea 
                id='desc'
                title="Product Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='p-2 !min-h-[150px]'
            />
            <p className='text-gray-600 font-semibold'>You Description Should Describe the product you're offering or we will reject your offer.</p>
           </label>
            <div className='flex-col gap-2 flex'>
            <p className='text-lg font-semibold'>Colors:</p>
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
            <p className='text-lg font-semibold'>Type:</p>
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
            <p className='text-lg font-semibold'>Category:</p>
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
            <p className='text-lg font-semibold'>Sizes available:</p>
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
            <p className='text-lg font-semibold'>Gender:</p>
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
              <p className='text-lg font-semibold'>Price: ($)</p>
                <input 
                type="number" 
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                title='Price'
                className='max-w-[200px] p-2 rounded-md'
                />
              </label>
              <label htmlFor="files" className='flex flex-col gap-2 relative'>
                <p className='text-lg font-semibold'>Images: <span className='text-gray-500 text-base'>03 Pictures minimum</span></p>
                <input 
                ref={fileRef}
                multiple
                accept='image/*'
                onChange={previewFiles}
                id='files'
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

              {src.length >= 0  && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                  {src.map((img, index) => (
                    <div key={index} className='border border-purplePrimary rounded-md overflow-hidden h-fit relative'>
                      <button 
                      type='button'
                      onClick={() => handleDelete(img)}
                      title='Delete' 
                      className='absolute z-20 top-2 right-2 text-xl hover:scale-150  duration-200 ease-in text-red-600'><IoTrashBinOutline /></button>
                      <img src={img} alt="Testing" />
                    </div>
                  ))}
              </div>}

              <div className='actions flex justify-end gap-2 items-center'>
                <button 
                  title='Save draft'
                  className='bg-secondaryLight text-black font-semibold p-2 rounded-md border border-black'
                >
                  Save as draft
                </button>
                <button 
                  title='Post product'
                  className='bg-purplePrimary text-white font-semibold p-2 rounded-md'
                >
                  Post Product
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddProductPage