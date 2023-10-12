'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import NavbarItemsNormal from "./NavbarItemsNormal"
import NavbarItemsMobile from "./NavbarItemsMobile"

const Navbar = () => {
    const URL_BASE_USUARIOS = 'http://localhost:4000/api/usuarios'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [usuario, setUsuario] = useState([])

    const cerrarSesion = async () => {
        usuario.loged = 0
        try {
            await fetch(`${URL_BASE_USUARIOS}/${usuario.usuarioId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario) // Convierte el objeto en una cadena JSON
            })
            sessionStorage.clear()
            window.location.href = '/'
        }
        catch (error) {
            alert('Ha habido un poblema, tu sesión expirará al cerrar el navegador')
        }

    }

    useEffect(() => {
        const fetchData = async (user) => {
            const data = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data[0])
        }
        if (window.sessionStorage.getItem("usuario") !== undefined) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
    }, [])

    //RENDERIZADO NORMAL ---->
    return (
        <nav className="bg-blue-00 mb-12 border-b-2 border-gray">
            <div className="mx-auto sm:pr-6 lg:pr-8 bg-blue-200">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 justify-start">
                            <Link href="/about">
                                <Image
                                    src={"/logo/icono-pilar-ramos.png"}
                                    width={41}
                                    height={10}
                                    alt="Pilar Ramos Logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="hidden lg:block space-x-20">
                            <NavbarItemsNormal path={"/about"} description={"Sobre mi"} />
                            <NavbarItemsNormal path={"/contacto"} description={"Contacto"} />
                            <NavbarItemsNormal path={"/videos"} description={"Videos"} />
                            <NavbarItemsNormal path={"/noticias"} description={"Noticias"} />
                            <NavbarItemsNormal path={"/entrevistas"} description={"Entrevistas"} />
                            <NavbarItemsNormal path={"/reconocimientos"} description={"Reconocimientos y premios"} />
                            {usuario !== undefined && usuario.loged == 1 ? (<button onClick={cerrarSesion}>Cerrar sesion</button>) : null}
                        </div>

                        {/* BOTON MOVIL */}
                        <div className="lg:hidden">
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
                <div className="lg:hidden">
                    <ul className="pr-2 pt-2 pb-3 space-y-1 sm:pr-3 text-right">
                        <NavbarItemsMobile path={"/about"} description={"Sobre mi"} />
                        <NavbarItemsMobile path={"/contacto"} description={"Contacto"} />
                        <NavbarItemsMobile path={"/videos"} description={"Videos"} />
                        <NavbarItemsMobile path={"/noticias"} description={"Noticias"} />
                        <NavbarItemsMobile path={"/entrevistas"} description={"Entrevistas"} />
                        <NavbarItemsMobile path={"/reconocimientos"} description={"Reconocimientos y premios"} />
                        {usuario !== undefined && usuario.loged == 1 ? (<button onClick={cerrarSesion}>Cerrar sesion</button>) : null}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
