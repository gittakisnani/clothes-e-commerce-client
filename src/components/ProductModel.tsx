import { MdOutlineClose } from '../Icons'
import Modal from './Modal'
import ProductPage from './ProductPage'
import { useEffect  } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ProductModel = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    window.history.replaceState(null, '', `/product/${searchParams.get('product')}`)
  }, [searchParams]);

  const handleClose = () => {
    navigate(-1)
  }

  return (
    <Modal>
        <button 
        title='Close Portal'
        onClick={handleClose}
        className='sticky text-xl top-1 float-right bg-white z-20 text-black'>
        <MdOutlineClose />
        </button>
        <ProductPage id={searchParams.get('product')} />
    </Modal>
  )
}

export default ProductModel