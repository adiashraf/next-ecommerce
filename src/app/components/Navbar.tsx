import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./Navicons"

const Navbar = () => {
    return(
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/*Mobile*/}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                <Image src="/Logo/logo.png" alt="" width={160} height={160}/></Link>
                <Menu/>
            </div>

            {/* BIGGER SCREEN */}
            <div className='hidden md:flex items-center justiify-between gap-8 h-full'>
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/Logo/logo.png" alt="" width={160} height={160}/>
                </Link>
                <div className="hidden xl:flex gap-4">
                    <Link href="/">Category</Link>
                    <Link href="/">About</Link>
                </div>

                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                <SearchBar/>
                <NavIcons/>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar