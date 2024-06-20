import Image from "next/image"
import Link from "next/link"
import { About } from "./about"
import { Calendly } from "./calendly"
export const NavBar = () => {
    return (
        <nav
            className="w-full z-10 bg-white flex justify-between items-center 
            sm:px-10 px-6 py-8 rounded-2xl overflow-hidden"
        >
            <Link href="/" className="flex justify-center items-center">
                <Image
                    src="/vixen.png"
                    alt="vixen"
                    priority
                    width={999}
                    height={999}
                    className="w-40 h-auto pointer-events-none overflow-hidden 
                    -my-12"
                />
            </Link>
            <div className="flex gap-2">
                <Link
                    href={{ pathname: "/About" }}
                    className="text-black hover:bg-black/5 px-3 py-2 
                    rounded-lg transition"
                >
                    About
                </Link>
                <Link
                    href="/Calendly"
                    className="text-black hover:bg-black/5 px-3 py-2 
                    rounded-lg transition"
                >
                    Calendly
                </Link>
                <Link
                    href="/contact"
                    className="text-black hover:bg-black/5 px-3 py-2 
                    rounded-lg transition"
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}
