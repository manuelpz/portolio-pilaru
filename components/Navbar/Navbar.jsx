'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import NavbarItemsNormal from "./NavbarItemsNormal"
import NavbarItemsMobile from "./NavbarItemsMobile"
import '@/components/Navbar/navbar.css'

const Navbar = () => {
    const URL_BASE_USUARIOS = 'https://portfolio-pilaru-back.onrender.com/api/usuarios'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [menuWasOpen, setMenuWasOpen] = useState(undefined) // controla que no se vea la animacion a la izquierda nada mas cargar la pagina
    const [usuario, setUsuario] = useState([])

    const menuEstabaAbierto = () => {
        return !isMobileMenuOpen && menuWasOpen ? "deslizamientoIzquierda" : "hidden"
    }

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

    const cerrarSesionYMenu = () => {
        cerrarSesion()
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        const fetchData = async (user) => {
            const data = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data)
        }
        if (window.sessionStorage.getItem("usuario") !== undefined && window.sessionStorage.getItem("usuario") !== null) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
    }, [])

    //RENDERIZADO NORMAL ---->
    return (
        <nav className="mb-12">
            <div className="mx-auto sm:pr-6 lg:pr-8 bg-blue-200">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 justify-startz mr-10">
                            <Link href="/about">
                                <Image
                                    src={"/logo/icono-pilar-ramos.png"}
                                    width={41}
                                    height={55}
                                    alt="Pilar Ramos Logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="hidden lg:block space-x-20">
                            <NavbarItemsNormal path={"/about"} description={"Sobre mi"} />
                            <NavbarItemsNormal path={"/reconocimientos"} description={"Reconocimientos y premios"} />
                            <NavbarItemsNormal path={"/contacto"} description={"Contacto"} />
                            <NavbarItemsNormal path={"/videos"} description={"Videos"} />
                            <NavbarItemsNormal path={"/noticias"} description={"Noticias"} />
                            <NavbarItemsNormal path={"/entrevistas"} description={"Entrevistas"} />
                            <NavbarItemsNormal path={"/podcasts"} description={"Podcasts"} />
                            {usuario !== undefined && usuario.loged == 1 ? (<NavbarItemsNormal path={"/adminPanel"} description={"AdminPanel"} />) : null}
                            {usuario !== undefined && usuario.loged == 1 ? (<Link href={'/'} onClick={cerrarSesion}>Cerrar sesion</Link>) : null}
                        </div>

                        {/* BOTON MOVIL */}
                        <div className="lg:hidden ">
                            <button
                                onClick={() => { setMenuWasOpen(true); setIsMobileMenuOpen(!isMobileMenuOpen) }}
                                className="text-gray-300 text-white hover:text-white"
                                aria-label="Toggle menu"
                            >
                                <svg className="h-6 w-6 fill-current">
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
                    <ul className="deslizamientoDerecha pt-2 space-y-1 sm:pr-3 text-right ">
                        <NavbarItemsMobile path={"/about"} description={"Sobre mi"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/reconocimientos"} description={"Reconocimientos y premios"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/contacto"} description={"Contacto"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/videos"} description={"Videos"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/noticias"} description={"Noticias"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/entrevistas"} description={"Entrevistas"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/podcasts"} description={"Podcasts"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        {usuario !== undefined && usuario.loged == 1 ? (<NavbarItemsMobile path={"/adminPanel"} description={"AdminPanel"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />) : null}
                        <li>
                            {usuario !== undefined && usuario.loged == 1 ? (<Link className="block border-solid border-b-2 hover:font-bold !mt-4 pr-4 pb-2" href={"/"} onClick={cerrarSesionYMenu}>Cerrar sesion</Link>) : null}
                        </li>
                    </ul>
                </div>
            )}

            {/* RENDERIZADO PARA HACER LA ANIMACION AL CERRAR LA BARRA DE NAVEGACION */}
            {!isMobileMenuOpen && (
                <div className={`lg:hidden ${menuEstabaAbierto()}`}>
                    <ul className="pt-2 space-y-1 sm:pr-3 text-right ">
                        <NavbarItemsMobile path={"/about"} description={"Sobre mi"} />
                        <NavbarItemsMobile path={"/reconocimientos"} description={"Reconocimientos y premios"} />
                        <NavbarItemsMobile path={"/contacto"} description={"Contacto"} />
                        <NavbarItemsMobile path={"/videos"} description={"Videos"} />
                        <NavbarItemsMobile path={"/noticias"} description={"Noticias"} />
                        <NavbarItemsMobile path={"/entrevistas"} description={"Entrevistas"} />
                        <NavbarItemsMobile path={"/podcasts"} description={"Podcasts"} />
                        {usuario !== undefined && usuario.loged == 1 ? (<NavbarItemsMobile path={"/adminPanel"} description={"AdminPanel"} />) : null}
                        {usuario !== undefined && usuario.loged == 1 ? (<Link href={"/"} onClick={cerrarSesionYMenu}>Cerrar sesion</Link>) : null}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
