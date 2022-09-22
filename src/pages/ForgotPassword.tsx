import { SyntheticEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const canSend = Boolean(email)
  const navigate = useNavigate()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!canSend) return;
    navigate('/resetcode')

    // DB stuff
  }
  return (
    <div className='h-screen p-4 md:p-6 bg-white'>
        <header className="p-2 flex items-center justify-center">
          <Link to='/'><p className="text-2xl">Taki<span className="font-bold">Snani</span></p></Link>
        </header>
        <form onSubmit={handleSubmit} className='p-4 rounded-md bg-white border w-full max-w-[500px] mx-auto my-10 flex flex-col'>
            <h3 className='text-xl md:text-3xl font-semibold'>Reset Password</h3>
            <label htmlFor="email" className='flex flex-col gap-2 w-full'>
                <p className='text-lg font-semibold'>Your email:</p>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" 
                id='email'
                className='p-2 rounded-md'
                />
            </label>

            <button 
            className="bg-purplePrimary text-white font-semibold text-lg p-2 rounded-md mt-4 self-end disabled:cursor-not-allowed"
            disabled={!canSend}
            >Send reset code</button>
        </form>
    </div>
  )
}

export default ForgotPassword