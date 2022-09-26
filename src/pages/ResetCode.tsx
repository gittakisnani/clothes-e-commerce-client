import { SyntheticEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { handleMetaTags, setPageTitle } from "../utils/pageUtils"

const ResetCode = () => {
  const [code, setCode] = useState('')
  const canReset = Boolean(code) // && code === resetcode that we've sent.
  const navigate = useNavigate()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!canReset) return;
    navigate('/newpassword')

    // DB stuff
  }

  useEffect(() => {
    setPageTitle('Reset code')
    handleMetaTags('Reset code', 'We have sent you a reset code')
  },[])
  return (
    <section className='h-screen p-4 md:p-6 bg-white'>
        <header className="p-2 flex items-center justify-center">
          <Link to='/'><p className="text-2xl">Taki<span className="font-bold">Snani</span></p></Link>
        </header>
        <form onSubmit={handleSubmit} className='p-4 rounded-md bg-white border w-full max-w-[500px] mx-auto my-10 flex flex-col'>
            <h3 className='text-xl md:text-3xl font-semibold'>Reset Password</h3>
            <p className="text-gray-600 font-semibold">Please check your email m**@**.**, we've sent you reset code</p>
            <label htmlFor="code" className='flex flex-col gap-2 w-full'>
                <p className='text-lg font-semibold'>Reset code:</p>
                <input 
                value={code}
                onChange={e => setCode(e.target.value)}
                type="text" 
                id='code'
                className='p-2 rounded-md'
                autoComplete="off"
                />
            </label>

            <button 
            className="bg-purplePrimary text-white font-semibold text-lg p-2 rounded-md mt-4 self-end disabled:cursor-not-allowed"
            disabled={!canReset}
            >Create new password</button>
        </form>
    </section>
  )
}

export default ResetCode
