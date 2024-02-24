'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CarpetaVacia from "@/components/CarpetaVacia/CarpetaVacia"
import useFetchData from "@/functions/useFetchData"
import BasicLoader from "@/components/BasicLoader/BasicLoader"
export default function ListadoArticulos() {
    const [contador, setContador] = useState(0)
    const handleClick = () => {
        setContador(contador + 12)
    }
    const URL_ARTICULOS = process.env.URL_NOTICIAS
    const { data, loading } = useFetchData(URL_ARTICULOS)

    if (loading) return (
        <BasicLoader />
    )

    if (data.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="mb-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-items-center ">
                {data.slice(0, 12 + contador).map((noticia) => (
                    <Link
                        href='/articulos/[id]' as={`/articulos/${noticia.id}`}
                        key={noticia.id}
                        className={`w-9/12 rounded overflow-hidden shadow-xl bg-[#F5F7FA]  mb-8 relative m-4 aparicion scroll-animation hover:cursor-pointer`}>
                        <div className="flex justify-center pt-6" >
                            <Image
                                className="flex items-center rounded"
                                src={noticia.img ?? '/logo/icono-pilar-ramos.png'}
                                alt="Imagen relacionada con la noticia"
                                width={100}
                                height={10} />
                        </div>
                        <div className="px-6 py-4">
                            <div className="transition hover:-translate-y-1 hover:scale-110 font-bold text-xl mb-2 text-center">{noticia.titulo}</div>
                            <p className="text-gray-700 text-base text-center">{noticia.subtitulo}</p>
                        </div>
                        <br />
                        <br />
                    </Link>
                ))
                }

            </div >
            {data.length > 12 + contador && <div className="grid grid-cols-1 justify-items-center">
                <button type="button" className="transition hover:scale-110 hover:bg-blue-300 hover:text-white border border-2 border-black p-1 rounded-3xl font-bold md:w-1/6 " onClick={handleClick}>
                    Mostrar más
                </button>
            </div>}
        </div>
    )
}
