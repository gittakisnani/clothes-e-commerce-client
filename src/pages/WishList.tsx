import Product from '../components/Product';
import products from '../data/products';
import { useGetMeQuery } from '../feature/userApiSlice';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const WishList = () => {
    const { data: me } = useGetMeQuery();
    const navigate = useNavigate()

    useEffect(() => {
        if(!me) return navigate('/login')
    }, [me, navigate])


  return (
    <section className="p-4 md:p-6 lg:p-8 flex-1">
        <h1 className='font-semibold text-xl'>My Wishlist: {me?.firstName} {me?.lastName}</h1>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2">
            {products.map(pr => (
                <Product key={pr.id} {...pr!} />
            ))}
        </div>
    </section>
  )
}

export default WishList
