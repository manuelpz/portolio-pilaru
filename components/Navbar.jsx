'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from 'next/navigation'
import "@/components/navbar.css"

const Navbar = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    
    //RENDERIZADO NORMAL ---->
    return (
        <nav className="bg-blue-00 mb-12 border-b-2 border-gray">
            <div className="mx-auto sm:pr-6 lg:pr-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 justify-start">
                            <Link href="/about">
                                <Image
                                    src={"/logo/icono-pilar-ramos.png"}
                                    width={40}
                                    height={10}
                                    alt="Pilar Ramos Logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="hidden md:block space-x-20">
                            <Link
                                className={pathname == "/about" ? "active" : "nonActive"}
                                href="/about"
                            >
                                Sobre mi
                            </Link>
                            <Link
                                className={
                                    pathname == "/contacto" ? "active" : "nonActive"
                                }
                                href="/contacto"
                            >
                                Contacto
                            </Link>
                            <Link
                                className={pathname == "/videos" ? "active" : "nonActive"}
                                href="/videos"
                            >
                                Videos
                            </Link>
                            <Link
                                className={pathname == "/noticias" ? "active" : "nonActive"}
                                href="/noticias"
                            >
                                Noticias
                            </Link>
                            <Link
                                className={
                                    pathname == "/reconocimientos" ? "active" : "nonActive"
                                }
                                href="/reconocimientos"
                            >
                                Reconocimientos y Premios
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                                aria-label="Toggle menu"
                            >
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19 11H5v-1h14v1zm0-5H5V6h14v1zm0 10H5v-1h14v1z"
                                        />
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RENDERIZADO PARA MOVIL ------> */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <ul className="pr-2 pt-2 pb-3 space-y-1 sm:pr-3 text-right">
                        <li className="block hover:bg-neutral-300 hover:font-bold">
                            <Link
                                className="text-black items-center"
                                href="/about"
                            >
                                Sobre mi
                            </Link>
                        </li>
                        <li className="block hover:bg-neutral-300 hover:font-bold">
                            <Link
                                className="text-black hover:text-black items-center"
                                href="/contacto"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li className="block  hover:bg-neutral-300 hover:font-bold">
                            <Link
                                className="text-black items-center"
                                href="/videos"
                            >
                                Videos
                            </Link>
                        </li>
                        <li className="block  hover:bg-neutral-300 hover:font-bold">
                            <Link
                                className="text-black items-center"
                                href="/noticias"
                            >
                                Noticias
                            </Link>
                        </li>
                        <li className="block hover:bg-neutral-300 hover:font-bold">
                            <Link
                                className="text-black items-center"
                                href="/reconocimientos"
                            >
                                Reconocimientos y premios
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
