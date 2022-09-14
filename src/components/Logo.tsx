import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="p-4 md:p-6 lg:border-r border-primaryLight flex items-center gap-2 justify-center self-stretch lg:w-[200px]">
        <Link to='/'><p className="text-xl">Taki<span className="font-bold">Snani</span></p></Link>
    </div>
  )
}

export default Logo