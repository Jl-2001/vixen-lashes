import Image from 'next/image'
import vixen from './../assets/vixen.png'
import Link from 'next/link';
import { About } from "./about";
import { Calendly } from "./calendly"
export const NavBar = () => {
    return (
        <nav className='w-full py-8 xl:py-1 absolute z-10 bg-white '>
            <div className='max-w-[1440px] mx-auto
            flex justify-between items-center
            sm:px-10 px-6 py-4'>
                <Link href='/' className='flex
                justify-center items-center'>
                    <Image
                    src={vixen}
                    alt="vixen"
                    width={80}
                    height={50}
                    />
                </Link>
                <div className="flex space-x-4">
                <Link href={{pathname: '/About'}} className="text-black hover:bg-blue-700 px-3 py-2 rounded">About</Link>
                <Link href="/Calendly" className="text-black hover:bg-blue-700 px-3 py-2 rounded">calendly</Link>
                <Link href="/contact" className="text-black hover:bg-blue-700 px-3 py-2 rounded">contact</Link>
                </div>
            </div>
        </nav>
    )
}