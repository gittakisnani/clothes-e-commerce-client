import { COUNTRIES } from "../config/config"
import { useState, useEffect } from 'react'
/*
Settings Have:
Username
Profile Pic
UpdatePassword
Email
Show Products
*/
const Settings = () => {
  const [country, setCountry] = useState<string>()
  const [phone, setPhone] = useState<string>()

  useEffect(() => {
    const countryCode = COUNTRIES.find(cn => Object.values(cn)[0].name === country)!
    setPhone(`+${Object.values(countryCode)[0].code}`)
  }, [country])
  return (
    <>
    <div className="header p-8 flex items-center justify-center font-semibold text-xl border-b">Settings</div>
    <section className=''>
      <div className="max-w-[800px] mx-auto p-4">
        <form className="flex flex-col gap-2">
          <div className="profile_settings">
            <h3 className="font-bold">Profile</h3>
            <p className="text-gray-600 font-semibold">This information will be displayed publicly so be careful what you share!</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <label htmlFor="fName" className="set_label">
              First Name:
              <input 
              id="fName"
              className="set_input"
              type="text" 
              />
            </label>
            <label htmlFor="lName" className="set_label">
              Last Name:
              <input 
              id="lName"
              className="set_input"
              type="text" 
              />
            </label>
          </div>
          <label htmlFor="username" className="set_label max-w-[500px]">
            Username:
            <input 
            type="text" 
            className="set_input"
            id="username"
            />
          </label>
          <label htmlFor="about" className="set_label max-w-[500px]">
            About:
            <textarea 
            className="set_input resize-y min-h-[100px]"
            id="about"
            />
            <p className="text-gray-600 font-semibold">Brief description for your profile.</p>
          </label>
          <label htmlFor="url" className="set_label max-w-[500px]">
            URL:
            <input 
            type="url" 
            className="set_input"
            id="url"
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
              type="email" 
              id="email" 
              className="set_input"
              />
            </label>
            <label htmlFor="tel" className="set_label">
              Phone Number:
              <input 
              type="tel" 
              value={phone}
              onChange={e => setPhone(e.target.value)}
              id="tel" 
              className="set_input"
              />
            </label>
            <label htmlFor="country" className="set_label">
              Country:
              <select 
              id="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="border border-gray-400 p-1 rounded-md">
                {COUNTRIES.map((cn, index) => (
                  <option className="flex gap-2 items-center" key={index} value={Object.values(cn)[0].name}>
                    {Object.values(cn)[0].name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="lng" className="set_label">
              Language:
              <input 
              type="text" 
              id="lng" 
              className="set_input"
              />
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