import { SyntheticEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { handleMetaTags, setPageTitle } from "../utils/pageUtils"

const NewPassword = () => {
  const [pwd, setPwd] = useState('')
  const [pwdConfirm, setPwdConfirm] = useState('')
  const canSave = [pwd, pwdConfirm].every(Boolean) && pwd === pwdConfirm
  const navigate = useNavigate()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!canSave) return;
    navigate('/')

    // DB stuff
  }

  useEffect(() => {
    setPageTitle('New Password')
    handleMetaTags('create new password', 'Create new password')
},[])


  return (
    <section className='h-screen p-4 md:p-6 bg-white'>
        <header className="p-2 flex items-center justify-center">
          <Link to='/'><p className="text-2xl">Taki<span className="font-bold">Snani</span></p></Link>
        </header>
        <form onSubmit={handleSubmit} className='p-4 rounded-md bg-white border w-full max-w-[500px] mx-auto my-10 flex flex-col'>
            <h3 className='text-xl md:text-3xl font-semibold'>Create new password</h3>
            <p className="text-gray-600 font-semibold">Password and password confirmation should match</p>
            <label htmlFor="pwd" className='flex flex-col gap-2 w-full'>
                <p className='text-lg font-semibold'>Password:</p>
                <input 
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                type="password" 
                id='pwd'
                className='p-2 rounded-md'
                />
            </label>
            <label htmlFor="pwd2" className='flex flex-col gap-2 w-full mt-2'>
                <p className='text-lg font-semibold'>Confirm password:</p>
                <input 
                value={pwdConfirm}
                onChange={e => setPwdConfirm(e.target.value)}
                type="password" 
                id='pwd2'
                className='p-2 rounded-md'
                />
            </label>

            <button 
            className="bg-purplePrimary text-white font-semibold text-lg p-2 rounded-md mt-4 self-end disabled:cursor-not-allowed"
            disabled={!canSave}
            >Save new password</button>
        </form>
    </section>
  )
}

export default NewPassword
