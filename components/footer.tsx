import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import Link from "next/link"

export const Footer = () => {
    const links = [
        {
            href: "https://www.instagram.com/vixenbeautybar_?igsh=NWFrazZua2tkZ2Vr&utm_source=qr",
            icon: <InstagramIcon className="h-8 w-8" />
        },
        {
            href: "mailto:j.lazaro0101@gmail.com",
            icon: <EmailIcon className="h-8 w-8" />
        }
    ]
    return (
        <div className="text-center pb-8" id="footer">
            <div className="flex items-center justify-center space-x-4">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                        className="hover:opacity-45 transition duration-300"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
            <p className="text-sm text-black">jorge.lazro@gmail.com</p>
            <p className="text-sm text-black">©jorge, all rights reserved</p>
        </div>
    )
}
