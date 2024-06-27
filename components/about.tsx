import Link from "next/link"
import { ArrowRight } from "lucide-react"
export const About = () => {
    return (
        <div id="about" className="pt-20">
            <div className="text-center px-8">
                <div className="mb-6" data-aos="fade-up">
                    <div
                        className="relative inline-flex before:absolute 
                        before:inset-0"
                    >
                        <Link
                            href="https://www.instagram.com/vixenbeautybar_?igsh=NWFrazZua2tkZ2Vr&utm_source=qr"
                            className="px-3 py-1 text-sm font-medium inline-flex 
                            items-center justify-content border rounded-full 
                            bg-white text-black hover:text-orange-200 
                            transition duration-150 ease-in-out w-full group 
                            border-slate-100/40"
                            target="_blank"
                        >
                            <span className="relative inline-flex items-center">
                                View our socials!
                                {""}
                                <span
                                    className="tracking-normal text-primary-500 
                                    group-hover:translate-x-0.5 duration-150 
                                    transition-transform ease-in-out ml-1"
                                >
                                    -&gt;
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <h1
                    className="pb-4 font-bold tracking-tight text-transparent 
                    text-6xl lg:text-7xl bg-clip-text bg-white"
                    data-aos="fade-up"
                >
                    For Vixen
                </h1>
                <p
                    className="mb-8 text-lg text-white font-medium"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    We provide a unique experience at the price.
                </p>
                <div
                    className="flex flex-col items-center max-w-xs mx-auto 
                    gap-4 sm:justify-center sm:flex-row sm:inline-flex"
                >
                    <Link
                        href="#calendly"
                        className="w-full justify-center flex items-center 
                        whitespace-nowrap transition duration-150 ease-in-out 
                        font-medium rounded px-4 py-1.5 text-zinc-900 
                        bg-gradient-to-r from-white/80 via-white 
                        to-white/80 hover:bg-white group"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Book a free quote!
                        <ArrowRight
                            className="w-3 h-3 tracking-normal text-primary-500 
                            group-hover:translate-x-0.5 transition-transform 
                            duration-150 ease-in-out ml-1"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
