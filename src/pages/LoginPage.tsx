import { useEffect, useState } from 'react'
import { AiOutlineGithub, BsGoogle, AiFillInfoCircle, BsCheckLg } from '../Icons'
import { handleMetaTags, setPageTitle } from '../utils/pageUtils'
import { OAuthHoverClass } from './RegistrationPage'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../feature/authApiSlice'
import { spinner } from './AddProductPage'
import getGoogleOAuthURL from '../utils/getGoogleUrl'
import { Props } from '../App';

const gitClientId = process.env.REACT_APP_GIT_CLIENT as string;
const uri = process.env.REACT_APP_GIT_REDIRECT_URI as string;
const path = '/';
export const gitOauthLink=`https://github.com/login/oauth/authorize?client_id=${gitClientId}&redirect_uri=${uri}?path=${path}&scope=user:email`


const LoginPage = ({ setModal, setModalInfo }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        setPageTitle('Login Page')
        handleMetaTags('Login page of takiSnani website', 'With this page sellers, users or buyers can login back to their registered accounts either with their credentials ot via OAuth with Google, Github, Twitter')
    },[])


    useEffect(() => {
        setErrMsg('')
    }, [password, email])

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value as string)
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value as string)
    }

    useEffect(() => {
        if(isLoading) {
            setModal(true)
            setModalInfo({
                icon: spinner,
                text: 'Logging in...',
                iconColor: ''
            })
        }
    }, [isLoading])

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(!email || !password) {
            setErrMsg('All fields are required.');
            return
        };

        if(password.length < 8) {
            setErrMsg('Password should be at least 8 characters');
            return;
        }


        try {
            await login({ password, email }).unwrap();
            setModal(true);
            setModalInfo({
                text: 'Successfully logged in.',
                icon: <BsCheckLg />,
                iconColor: 'text-green-500'
            })


            setTimeout(() => {
                setModal(false)
                setModalInfo({
                    icon: null,
                    iconColor: '',
                    text: ''
                })
                navigate('/')
            }, 2000)
        } catch(err: any) {
            setModal(false)
            setErrMsg(err?.data?.message ? err.data.message : 'Login failed')
        }

    } 

  return (
    <section className='min-h-screen grid place-items-center p-4 md:p-6 relative'>
        <div className='w-full max-w-[450px] bg-white'>
            <form onSubmit={handleSubmit} className='border rounded-md p-4 md:p-10 flex-col flex gap-4'>
                <Link to='/'><p className="text-2xl pb-4">Taki<span className="font-bold">Snani</span></p></Link>
                <div>
                    <h1 className=''>Login to your account</h1>
                    <div className='pb-2 flex gap-2 items-center'>Don't have account yet? <Link to='/register'><p className='font-bold text-purplePrimary'>Register</p></Link></div>
                </div>
                {errMsg && <h4 className='flex text-red-600 gap-2 items-center font-semibold text-lg'>
                    <span className='text-xl'><AiFillInfoCircle /></span>
                    <p>{errMsg}</p>
                </h4>}
                <label className='flex flex-col gap-1' htmlFor="email">
                    Email address
                    <input 
                    value={email}
                    onChange={handleEmailChange}
                    className='border rounded-md p-2 duration-300 ease-in-out hover:border-purplePrimary focus:border-purplePrimary active:border-purplePrimary'
                    type="email" 
                    />
                </label>
                <label className='flex flex-col gap-1' htmlFor="email">
                    Password
                    <input 
                    value={password}
                    onChange={handlePasswordChange}
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
                    <Link to='/forgotpassword' className='text-purplePrimary font-bold '>Forgot your password?</Link>
                </div>

                <button className='font-bold w-full rounded-md p-2 text-white bg-purplePrimary'>Login</button>

                <p className='w-fit mx-auto text-sm uppercase'>Or continue with</p>

                <div className='grid grid-cols-2 gap-2 mt-2'>
                    <a href={getGoogleOAuthURL()} title='Login with Facebook' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-xl ' + OAuthHoverClass}>
                        <BsGoogle />
                    </a>
                    <a href={gitOauthLink} title='Login with Github' className={'px-4 py-2 rounded-md border border-primaryLight text-primaryLight grid place-items-center text-2xl ' +  OAuthHoverClass}>
                        <AiOutlineGithub />
                    </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default LoginPage