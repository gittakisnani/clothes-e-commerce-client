import { COUNTRIES, LANGUAGES } from "../config/config"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { HiOutlineHome} from '../Icons'
import { handleMetaTags, setPageTitle } from "../utils/pageUtils"
import { UserInfo } from "../types/types"
import { AiFillInfoCircle } from '../Icons'
import { useGetUserByIdMutation, useUpdateMutation } from "../feature/userApiSlice"


type LoadUserFN = (id: string) => Promise<UserInfo | null>

const Settings = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<Omit<UserInfo, 'password'>>({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    lang: '',
    url: '',
    about: '',
    email: '',
    username: ''
  })
  const [errMsg, setErrMsg] = useState('')
  const [update, { isLoading }] = useUpdateMutation();
  const [getUserById] = useGetUserByIdMutation()
  const handleChange = (e: any) => {
    const { type, name } = e.target;
    const value = type !== 'checkbox' ? e.target.value : e.target.checked;

    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    const getUser: LoadUserFN = async (id: string) => {
      try {
        const { user } = await getUserById(id).unwrap();
        console.log(user)
        setUserInfo(user)
        return user
      } catch(err) {
        console.log(err);
        return null
      }
    }

    getUser('6339cba43ef8fedaf21fed20')

    setPageTitle('Settings')
    handleMetaTags('Settings, user settings', 'With this page sellers, users or buyers can change their profile settings like first and last names username, email, bio....')
  },[])

  useEffect(() => {
    setErrMsg('')
  }, Object.keys(userInfo))

  const handleReset = () => {
    alert('All changes won\'t be saved')
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    //If about ? About should be 20 chars or more.
    if(!Object.values(userInfo).every(vl => Boolean(vl))) {
      setErrMsg('All fields are required.');
      return;
    }
    //Add modal
    //DB Stuff
    try {
      const user = await update({updates: userInfo, params: {userId: '6339cba43ef8fedaf21fed20'}})
      console.log(user)
    } catch(err: any) {
      setErrMsg(err.data.message || 'An error was occurred. Please try again.')
    } 
  }

  const handleNavigate = () => {
    alert('Changes won\'t be saved')
    navigate('/')
  }

  return (
    <>
    <div className="header p-8 flex items-center justify-between font-semibold text-xl border-b">
      <h3>Settings</h3>
      <p onClick={handleNavigate} className="text-lg flex gap-2 items-center cursor-pointer"><HiOutlineHome />Home</p>
    </div>
    <section className=''>
      <div className="max-w-[800px] mx-auto p-4">
        <form onReset={handleReset} onSubmit={handleSubmit}  className="flex flex-col gap-2">
          <div className="profile_settings">
            <h3 className="font-bold">Profile</h3>
            <p className="text-gray-600 font-semibold">This information will be displayed publicly so be careful what you share!</p>
          </div>
          {errMsg && <h4 className='flex text-red-600 gap-2 items-center font-semibold p-2 my-2 text-lg'>
            <span className='text-xl'><AiFillInfoCircle /></span>
            <p>{errMsg}</p>
          </h4>}
          <div className="flex flex-col md:flex-row gap-2">
            <label htmlFor="fName" className="set_label">
              First Name:
              <input 
              name="firstName"
              id="fName"
              className="set_input"
              type="text" 
              value={userInfo.firstName}
              onChange={handleChange}
              />
            </label>
            <label htmlFor="lName" className="set_label">
              Last Name:
              <input 
              name="lastName"
              id="lName"
              className="set_input"
              type="text" 
              value={userInfo.lastName}
              onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="username" className="set_label max-w-[500px]">
            Username:
            <input 
            name="username"
            type="text" 
            className="set_input"
            id="username"
            value={userInfo.username}
            onChange={handleChange}
            />
          </label>
          <label htmlFor="about" className="set_label max-w-[500px]">
            About:
            <textarea 
            name="about"
            className="set_input resize-y min-h-[100px]"
            id="about"
            value={userInfo.about}
            onChange={handleChange}
            />
            <p className="text-gray-600 font-semibold">Brief description for your profile.</p>
          </label>
          <label htmlFor="url" className="set_label max-w-[500px]">
            URL:
            <input 
            name="url"
            type="url" 
            className="set_input"
            id="url"
            value={userInfo.url}
            onChange={handleChange}
            />
          </label>
          <div className="profile_settings">
            <h3 className="font-bold">Personal Information</h3>
            <p className="text-gray-600 font-semibold">This information will be displayed publicly so be careful what you share!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <label htmlFor="email" className="set_label">
              Email address:
              <input 
              name="email"
              type="email" 
              id="email" 
              className="set_input"
              value={userInfo.email}
              onChange={handleChange}
              />
            </label>
            <label htmlFor="tel" className="set_label">
              Phone Number:
              <input 
              name="phone"
              type="tel" 
              id="tel" 
              className="set_input"
              value={userInfo.phone}
              onChange={handleChange}
              />
            </label>
            <label htmlFor="country" className="set_label">
              Country:
              <select
              name="country"
              id="country"
              className="border border-gray-400 p-1 rounded-md outline-purplePrimary"
              value={userInfo.country}
              onChange={handleChange}
              >
                {COUNTRIES.map((cn, index) => (
                  <option className="flex gap-2 items-center" key={index} value={Object.values(cn)[0].name}>
                    {Object.values(cn)[0].name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="lng" className="set_label">
              Language:
              <select 
              name="lang"
              id="lng" 
              className="border border-gray-400 p-1 rounded-md outline-purplePrimary"
              value={userInfo.lang}
              onChange={handleChange}
              >
                {Object.entries(LANGUAGES).map(([key, { name }]) => (
                  <option key={key} value={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-full flex justify-end gap-2 items-center mt-2">
            <button type="reset" className="bg-gray-300 text-black rounded-md p-2 font-semibold">Cancel</button>
            <button className="bg-purplePrimary text-white rounded-md p-2 font-semibold">Save</button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Settings