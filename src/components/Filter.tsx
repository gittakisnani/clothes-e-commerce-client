import { MdOutlineClose } from '../Icons'

type FilterProps = {
    filter: string
}


const Filter = ({ filter }: FilterProps) => {
  return (
    <div className="capitalize flex gap-2 items-center bg-secondaryLight p-2 rounded-md">
        <span>{filter}</span>
        <button title='Remove filter' className='p-1 rounded-full text-sm grid place-items-center bg-primaryLight/30 text-black/80 '>
            <MdOutlineClose />
        </button>
    </div>
  )
}

export default Filter