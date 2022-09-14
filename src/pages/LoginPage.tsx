import { BsTwitter, AiOutlineGithub, BsFacebook } from '../Icons'
import { OAuthHoverClass } from './RegistrationPage'
const LoginPage = () => {

  return (
    <div className='min-h-screen grid place-items-center p-4 md:p-6 relative'>
        <div className='w-full max-w-[450px] bg-white'>
            <form className='border rounded-md p-4 md:p-10 flex-col flex gap-4'>
                <p className="text-2xl pb-4">Taki<span className="font-bold">Snani</span></p>
                <div>
                    <h1 className=''>Login to your account</h1>
                    <p className='pb-2'>Don't have account yet? <a href="#" className='font-semibold text-purplePrimary'>Register</a></p>
                </div>
                <label className='flex flex-col gap-1' htmlFor="email">
                    Email address
                    <input 
                    className='border rounded-md p-2 duration-300 ease-in-out hover:border-purplePrimary focus:border-purplePrimary active:border-purplePrimary'
                    type="email" 
                    />
                </label>
                <label className='flex flex-col gap-1' htmlFor="email">
                    Password
                    <input 
                    className='border rounded-md p-2 duration-300 ease-in-out hover:border-purplePrimary focus:border-purplePrimary active:border-purplePrimary'
                    type="password" 
                    />
                </label>
                <div className='flex justify-between items-center'>
                    <label htmlFor="persist" className='flex gap-2 items-center'>
                    <input 
                        type="checkbox" 
                        className='accent-purplePrimary'
                        id='persist'
                    />
                    Remember me
                    </label>
                    <a href="#" className='text-purplePrimary font-semibold'>Forgot your password?</a>
                </div>

                <button className='font-bold w-full rounded-md p-2 text-white bg-purplePrimary'>Login</button>

                <p className='w-fit mx-auto text-sm uppercase'>Or continue with</p>

                <div className='grid grid-cols-3 gap-2 mt-2'>
                    <button title='Login with Twitter' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
                        <BsTwitter />
                    </button>
                    <button title='Login with Facebook' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
                        <BsFacebook />
                    </button>
                    <button title='Login with Github' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-2xl ' +  OAuthHoverClass}>
                        <AiOutlineGithub />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage