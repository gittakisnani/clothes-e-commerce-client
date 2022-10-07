import { useState, useRef, useEffect } from 'react'
import { CATEGORIES, COLORS, SIZES, TYPE_FILTERS } from '../config/config';
import { IoTrashBinOutline, AiFillInfoCircle, BsCheckLg } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types/types';
import { Arrays, spinner } from './AddProductPage';
import { useDeleteProductMutation, useGetProductMutation, useUpdateProductMutation } from '../feature/productApiSlice';
import Modal from '../components/Modal';


const initialState = {
  title: '',
  desc: '',
  gender: 'Woman',
  price: 0,
  images: [],
  types: [],
  cats: [],
  colors: [],
  sizes: []
} as Product
const EditProductPage = () => {
  const fileRef = useRef<HTMLInputElement | null>(null!);
  const [productInfo, setProductInfo] = useState<Product>(initialState)
  const [getProduct, { isLoading }] = useGetProductMutation();
  const [updateProduct, { isLoading: updateProductLoading }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: deleteProductLoading }] = useDeleteProductMutation()
  const [errMsg, setErrMsg] = useState('');
  const [modal, setModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const { id: productId } = useParams<{ id: string }>();
  const navigate = useNavigate()

  const previewFiles = () => {
    const files = fileRef.current?.files!
    const reader = new FileReader();

    reader.onloadend = () => setProductInfo({...productInfo, images: [...productInfo.images, String(reader.result)]})

    for(let i = 0; i < files.length; i++) {
      if(files[i]) {
        reader.readAsDataURL(files[i])
      } else {
        setProductInfo({...productInfo, images: []})
      }
    }
  }

  const handleDelete = (imgSrc: string) => {
    setProductInfo({ ...productInfo, images: productInfo.images.filter(img => img !== imgSrc)})
  }

  const handleProductInfoChange = (e: any) => {
    const { type, name, value } = e.target;

    setProductInfo(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }))
  }

  const handleArrays = (keyName: Arrays, value: string) => {
    setProductInfo(prev => ({
      ...prev,
      [keyName]: prev[keyName].indexOf(value) !== -1 ? prev[keyName].filter(pr => pr !== value) : [...prev[keyName], value]
    }))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(!Object.values(productInfo).every(el => Boolean(Array.isArray(el) ? el.length : el))) {
      return setErrMsg('All fields are required')
    }

    if(productInfo.desc.length < 20 ) {
      return setErrMsg('Please make sure the description is more than 20 chars')
    }

    try {
      //@ts-ignore
      const updated = await updateProduct({updates: {...productInfo}, params: { productId }}).unwrap();
      setModal(true)
      setModalText('Product successfully updated')
      setInterval(() => setModal(false), 3000)
    } catch(err) {
      console.log(err)
    }
  }


  const handleReset = (e: React.SyntheticEvent) => {
    e.preventDefault()
    navigate('/')
  }

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct({ productId }).unwrap();
      setModal(true)
      setModalText('Product successfully deleted');
      setInterval(() => {
        setModal(false);
        setModalText('')
        navigate('/')
      }, 3000)
    } catch(err) {
      setErrMsg('Cannot delete product')
    }
  }


  useEffect(() => {
    const getProductHandler = async () => {
      try {
        //@ts-ignore
        const product= await getProduct({ productId }).unwrap();
        setProductInfo(product)

        setModal(false)
      } catch(err) {
        navigate('/404')
      }
    } 

    getProductHandler()

    setPageTitle('Edit Product')
    handleMetaTags('Edit posted product page', 'With this page sellers can Edit their products and reoffer them again to buyers')
  },[])


  useEffect(() => {
    setModal(true);
    setModalText(isLoading ? 'Fetching the corresponding product' : updateProductLoading ? 'Updating product...' : 'Deleting product...')
  }, [isLoading, updateProductLoading, deleteProductLoading])

  useEffect(() => {
    setErrMsg('')
  }, [productInfo])

  return (
    <section className='flex-1 p-4 md:p-6'>
        <h2 className=''>Edit Product</h2>
        {modal && <Modal setModal={setModal}>
          <div className='p-4 flex gap-2 text-xl items-center '>
            {modalText.includes('Product successfully') ? <span className='text-green-500'><BsCheckLg /></span> : spinner}
            {modalText}
            </div>
        </Modal>}
        {errMsg && <h4 className='flex bg-red-300 text-red-600 gap-2 items-center font-semibold p-2 my-2 text-lg'>
            <span className='text-xl'><AiFillInfoCircle /></span>
            <p>{errMsg}</p>
        </h4>}
        <form onSubmit={handleSubmit} onReset={handleReset} className="flex flex-col gap-2">
           <label className="flex-col flex gap-2" htmlFor="title">
              <p className='text-lg font-semibold'>Title:</p>
              <input 
                id='title'
                name='title'
                title="Product title"
                type="text" 
                value={productInfo.title}
                onChange={handleProductInfoChange}
                className='p-2'
            />
            <p className='text-gray-600 font-semibold'>You Title Should match the product you're offering.</p>
           </label>
           <label className="flex-col flex gap-2" htmlFor="desc">
           <p className='text-lg font-semibold'>Description:</p>
              <textarea 
                id='desc'
                name='desc'
                title="Product Description"
                value={productInfo.desc}
                onChange={handleProductInfoChange}
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
                    checked={productInfo.colors.indexOf(hex) !== -1}
                    onChange={() => handleArrays('colors', hex)}
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
                    checked={productInfo.types.indexOf(type) !== -1}
                    onChange={() => handleArrays('types', type)}
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
                    checked={productInfo.cats.indexOf(category) !== -1}
                    onChange={() => handleArrays('cats', category)} 
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
                    checked={productInfo.sizes.indexOf(size) !== -1}
                    onChange={() => handleArrays('sizes', size)}
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
                    checked={productInfo.gender === gender}
                    onChange={handleProductInfoChange}
                    name='gender'
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
                value={productInfo.price}
                name='price'
                onChange={handleProductInfoChange}
                title='Price'
                className='max-w-[200px] p-2 rounded-md'
                id='price'
                />
              </label>
              <label htmlFor="files" className='flex flex-col gap-2 relative'>
                <p className='text-lg font-semibold'>
                  Images: <span className='text-gray-500 text-base'>03 Pictures minimum</span></p>
                <input 
                ref={fileRef}
                multiple
                accept='image/*'
                onChange={previewFiles}
                id='files'
                type="file" 
                title='Images'
                className='file:p-2 file:bg-purplePrimary w-fit file:text-white file:border-none file:cursor-pointer file:rounded-md opacity-0 z-10'
                />
                <button 
                type='button'
                className='p-2 bg-purplePrimary text-white border-none font-semibold rounded-md w-fit absolute top-8'
                >   
                    Add Pictures
                </button>
              </label>

              {productInfo.images.length >= 0  && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                  {productInfo.images.map((img, index) => (
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
                  type='reset'
                  title='Discard changes'
                  className='bg-secondaryLight text-black font-semibold p-2 rounded-md border border-black'
                >
                  Discard changes
                </button>
                <button 
                  type='button'
                  onClick={() => handleDeleteProduct(productId as string)}
                  title='Delete Product'
                  className='bg-secondaryLight font-bold p-2 rounded-md border text-white flex gap-2 items-center bg-red-400 duration-200 ease-in-out hover:bg-red-500 border-red-600'
                >
                  <span><IoTrashBinOutline /></span>
                  Delete Product
                </button>
                <button 
                  type='submit'
                  title='Save changes'
                  className='bg-purplePrimary text-white font-semibold p-2 rounded-md'
                >
                  Save changes
                </button>
            </div>
        </form>
    </section>
  )
}

export default EditProductPage