import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Props } from '../App'
import { useRegisterMutation } from '../feature/authApiSlice'
import { BsTwitter, AiOutlineGithub, BsGoogle, AiFillInfoCircle, BsCheckLg } from '../Icons'
import getGoogleOAuthURL from '../utils/getGoogleUrl'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils'
import { spinner } from './AddProductPage'
import { gitOauthLink } from './LoginPage'

const IMAGE = 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/SEO_Forum-Size-Guide_Mastead_Teaser-Carousel_tcm221-919208.jpg'


export const OAuthHoverClass = 'hover:text-purplePrimary hover:border-purplePrimary focus:text-purplePrimary focus:border-purplePrimary active:text-purplePrimary active:border-purplePrimary duration-300 ease-in-out'


const RegistrationPage = ({ setModal, setModalInfo }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [agree, setAgree] = useState(false);


  const handleChangeAgree = () => setAgree(!agree)

  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    setPageTitle('Register')
    handleMetaTags('Registration page of takiSnani website', 'With this page sellers, users or buyers can register in this website with their new secure accounts or via OAuth using GitHub, Google or Twitter and start browsing and selling products')
  },[])

  useEffect(() => {
    setErrMsg('')
  }, [email, password]);

  useEffect(() => {
    if(isLoading) {
      setModal(true)
      setModalInfo({
        text: 'Registering user...',
        icon: spinner,
        iconColor: ''
      })
    }
  }, [isLoading])

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value as string)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value as string)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(!email || !password) {
      return setErrMsg('All fields are required')
    }

    if(password.length < 8) {
      return setErrMsg('Password too short')
    }

    if(!agree) {
      return setErrMsg('You must agree the conditions to continue')
    }

    try {
      await register({ email, password}).unwrap();
      setModal(true)
      setModalInfo({
        text: 'User successfully created',
        icon: <BsCheckLg />,
        iconColor: 'text-green-500'
      })


      setTimeout(() => {
        setModalInfo({
          text: '',
          iconColor: '',
          icon: null
        })
        setModal(false)

        navigate('/')
      }, 3000 )
    } catch(err: any) {
      setModal(false)
      setErrMsg(err?.data?.message as string || 'Registration failed')
    }
  }

  
  return (
    <section className='flex min-h-screen'>
     <div className='p-6 md:p-10 w-full md:w-fit flex flex-col '>
        <Link to='/'><p className="text-2xl pb-4">Taki<span className="font-bold">Snani</span></p></Link>
        <div className='flex-1 flex flex-col justify-center'>
        <h1 className=''>Create new account</h1>
        <p className='pb-6'>Already have an account? <Link to='/login' className='font-bold text-purplePrimary'>Login</Link></p>
        {errMsg && <h4 className='flex text-red-600 gap-2 items-center font-semibold text-lg'>
          <span className='text-xl'><AiFillInfoCircle /></span>
          <p>{errMsg}</p>
        </h4>}
        <p className='font-semibold opacity-80'>Register with</p>
        <div className='grid grid-cols-2 gap-2 mt-2'>
          <a href={getGoogleOAuthURL()} title='Register with Facebook' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
            <BsGoogle />
          </a>
          <a href={gitOauthLink} title='Register with Github' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-2xl ' +  OAuthHoverClass}>
            <AiOutlineGithub />
          </a>
        </div>

        <p className='uppercase text-sm mx-auto w-fit opacity-60 py-4'>Or continue with</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label htmlFor="email" className='flex flex-col w-full'>
            Email address
            <input 
              id='email'
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <label htmlFor='persist' className='flex gap-2 items-center'>
            <input 
            id='persist'
            className='accent-purplePrimary rounded-md h-6 w-6'
            type="checkbox" 
            checked={agree}
            onChange={handleChangeAgree}
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
    </section>
  )
}

export default RegistrationPage