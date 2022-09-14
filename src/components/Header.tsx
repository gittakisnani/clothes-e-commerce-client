/* eslint-disable jsx-a11y/no-access-key */
import {  IoEarthOutline, AiOutlineHeart, TbShoppingCart, FaUser, RiSearchLine, MdOutlineClose } from "../Icons"
import { useEffect, useState } from 'react'
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import useWindowSize from "../hooks/useWindowSize";
import SearchBar from "./SearchBar";

type HeaderProps = {
    setFilters: (value: boolean) => void
}

const Header = ({ setFilters } : HeaderProps) => {
    const [userMenu, setUserMenu] = useState(false)
    const [searchIcon, setSearchIcon] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const { width } = useWindowSize();

    useEffect(() => {
        setSearchIcon(width! < 768 ? true : searchIcon)
        setSearchBar(width! >= 768 ? true : false)
    }, [width])

    const handleSearchIconClick = () => {
        setSearchBar(true);
        setSearchIcon(false);
        setFilters(true)
    }

    const handleSearchBarBlur = () => {
        setSearchBar(false);
        setSearchIcon(true)
        setFilters(false)
    }
  return (
    <header className="flex items-center border-b border-primaryLight relative px-2">
            {(width! >=  1024 || !searchBar) && <Logo />}
            <div className="p-4 md:p-6 flex items-center gap-6 flex-1 w-fit">
                <div className="flex-1 flex gap-2">
                {(searchBar || width! >= 1024) && <>
                    <SearchBar onBlur={handleSearchBarBlur} setFilters={setFilters} />
                    {width! < 1024 && <button onClick={handleSearchBarBlur} className="text-2xl" title="Close"><MdOutlineClose /></button>}
                </>}
                </div>
                {(width! >=  1024 || !searchBar) && <div className="flex justify-end items-center gap-4">
                    {width! >= 1024 && <>
                        <button
                        title="Language"
                        className="flex items-center gap-1 text-primaryLight">
                            <p>ENG</p>
                            <IoEarthOutline size={'20px'} />
                        </button>
                        <button 
                        className="p-2 flex items-center gap-1 justify-center bg-purpleSecondary text-purplePrimary rounded-md">
                            <p className="font-semibold">Whishlist</p>
                            <span><AiOutlineHeart size={'20px'} /></span>
                        </button>
                        <button 
                        className="p-2 flex items-center gap-1 justify-center bg-purpleSecondary text-purplePrimary rounded-md">
                            <p className="font-semibold">My cart</p>
                            <span><TbShoppingCart size={'20px'} /></span>
                        </button>
                    </>}

                        {width! < 1024 && <button 
                        onClick={handleSearchIconClick}
                        title="Search Products" className="text-2xl">
                            <RiSearchLine />
                        </button>}

                    
                        <div
                        onClick={() => setUserMenu(!userMenu)}
                        className="border border-primaryLight rounded-full h-10 w-10 text-xl grid place-items-center">
                        <FaUser />
                        </div>
                    {userMenu && <UserMenu />}
                </div>}
            </div>
    </header>
  )
}

export default Header