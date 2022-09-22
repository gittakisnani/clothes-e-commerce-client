import { useEffect } from 'react'
import { BsTwitter, AiOutlineGithub, BsFacebook } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils'

const IMAGE = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/SEO_Forum-Size-Guide_Mastead_Teaser-Carousel_tcm221-919208.jpg'


export const OAuthHoverClass = 'hover:text-purplePrimary hover:border-purplePrimary focus:text-purplePrimary focus:border-purplePrimary active:text-purplePrimary active:border-purplePrimary duration-300 ease-in-out'


const RegistrationPage = () => {

  useEffect(() => {
    setPageTitle('Register')
    handleMetaTags('Registration page of takiSnani website', 'With this page sellers, users or buyers can register in this website with their new secure accounts or via OAuth using GitHub, Google or Twitter and start browsing and selling products')
  },[])

  
  return (
    <div className='flex min-h-screen'>
     <div className='p-6 md:p-10 w-full md:w-fit flex flex-col '>
        <p className="text-2xl pb-4">Taki<span className="font-bold">Snani</span></p>
        <div className='flex-1 flex flex-col justify-center'>
        <h1 className=''>Create new account</h1>
        <p className='pb-6'>Already have an account? <a href='#' className='font-semibold text-purplePrimary'>Login</a></p>

        <p className='font-semibold opacity-80'>Register with</p>
        <div className='grid grid-cols-3 gap-2 mt-2'>
          <button title='Register with Twitter' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
            <BsTwitter />
          </button>
          <button title='Register with Facebook' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
            <BsFacebook />
          </button>
          <button title='Register with Github' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-2xl ' +  OAuthHoverClass}>
            <AiOutlineGithub />
          </button>
        </div>

        <p className='uppercase text-sm mx-auto w-fit opacity-60 py-4'>Or continue with</p>

        <form className='flex flex-col gap-4'>
          <label htmlFor="email" className='flex flex-col w-full'>
            Email address
            <input 
              id='email'
              className='w-full border rounded-md p-2 duration-300 ease-out hover:border-purplePrimary focus:border-purplePrimary'
              type="email" 
            />
          </label>
          <label htmlFor="password" className='flex flex-col w-full'>
            Password
            <input 
              className='w-full border rounded-md p-2 duration-300 ease-out hover:border-purplePrimary  focus:border-purplePrimary'
              type="password" 
              id='password'
            />
          </label>

          <label htmlFor='persist' className='flex gap-2 items-center'>
            <input 
            id='persist'
            className='accent-purplePrimary rounded-md h-6 w-6'
            type="checkbox" 
            />
            <div>I agree to the <span className='text-purplePrimary'>Terms of services</span> and <span className='text-purplePrimary'>Privacy policy</span></div>
          </label>

          <button className='w-full rounded-md font-semibold text-white bg-purplePrimary p-2'>Create new account</button>
        </form>
        </div>
     </div>
     <div className='hidden md:block flex-1 min-h-screen max-h-full relative overflow-hidden bg-purplePrimary/20'>
      <img alt='Registration Cover' className='absolute inset-0 h-full z-[-1]' src={IMAGE} />
     </div>
    </div>
  )
}

export default RegistrationPage