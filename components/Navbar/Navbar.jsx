'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import NavbarItemsNormal from "./NavbarItemsNormal"
import NavbarItemsMobile from "./NavbarItemsMobile"
import '@/components/Navbar/navbar.css'

const Navbar = () => {
    const URL_USUARIOS = 'https://portfolio-pilaru-back.onrender.com/api/usuarios'
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [menuWasOpen, setMenuWasOpen] = useState(undefined) // controla que no se vea la animacion a la izquierda nada mas cargar la pagina
    const [usuario, setUsuario] = useState([])

    const menuEstabaAbierto = () => {
        return !isMobileMenuOpen && menuWasOpen ? "deslizamientoIzquierda" : "hidden"
    }

    const cerrarSesion = async () => {
        usuario.loged = 0
        try {
            await fetch(`${URL_USUARIOS}/${usuario.usuarioId}`, {
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
            const data = await fetch(`${URL_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data)
        }
        if (window.sessionStorage.getItem("usuario") !== undefined && window.sessionStorage.getItem("usuario") !== null) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
    }, [URL_USUARIOS])

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
                        <div className="hidden lg:flex lg:items-center space-x-20">
                            <NavbarItemsNormal path={"/about"} description={"Sobre mi"} />
                            <NavbarItemsNormal path={"/reconocimientos"} description={"Reconocimientos y premios"} />
                            <NavbarItemsNormal path={"/contacto"} description={"Contacto"} />
                            <NavbarItemsNormal path={"/videos"} description={"Videos"} />
                            <NavbarItemsNormal path={"/articulos"} description={"Articulos"} />
                            <NavbarItemsNormal path={"/entrevistas"} description={"Entrevistas"} />
                            <NavbarItemsNormal path={"/podcasts"} description={"Podcasts"} />
                            <NavbarItemsNormal path={"/recomendaciones"} description={"Recomendaciones"} />
                            <NavbarItemsNormal path={"/colaboradores"} description={"Colaboradores"} />
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
                                <svg className="h-6 w-6 fill-current mr-4 mt-2">
                                    {isMobileMenuOpen ? (
                                        <svg>
                                            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                            <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <svg>
                                            <rect width="24" height="3" rx="1.5" />
                                            <rect y="8" width="24" height="3" rx="1.5" />
                                            <rect y="16" width="24" height="3" rx="1.5" />
                                        </svg>
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
                        <NavbarItemsMobile path={"/articulos"} description={"Articulos"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/entrevistas"} description={"Entrevistas"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/podcasts"} description={"Podcasts"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/recomendaciones"} description={"Recomendaciones"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                        <NavbarItemsMobile path={"/colaboradores"} description={"Colaboradores"} setIsMenuOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
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
                        <NavbarItemsMobile path={"/articulos"} description={"Articulos"} />
                        <NavbarItemsMobile path={"/entrevistas"} description={"Entrevistas"} />
                        <NavbarItemsMobile path={"/podcasts"} description={"Podcasts"} />
                        <NavbarItemsMobile path={"/recomendaciones"} description={"Recomendaciones"} />
                        <NavbarItemsMobile path={"/colaboradores"} description={"Colaboradores"} />
                        {usuario !== undefined && usuario.loged == 1 ? (<NavbarItemsMobile path={"/adminPanel"} description={"AdminPanel"} />) : null}
                        {usuario !== undefined && usuario.loged == 1 ? (<Link href={"/"} onClick={cerrarSesionYMenu}>Cerrar sesion</Link>) : null}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
