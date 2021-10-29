import Image from "next/image";
import { 
    SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UserCircleIcon
 } from '@heroicons/react/outline'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Search form */}

            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input 
                    className="flex-grow pl-5 
                    bg-transparent outline-none 
                    text-sm text-gray-600 
                    placeholder-gray-400" 
                    type="text" 
                    placeholder="Search" />
                <SearchIcon className="hidden md:inline-flex h-8 text-red-400 cursor-pointer md:mx-2" />
            </div>

            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center 
                    spacex-2 border-2 rounded-full p-2 cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
