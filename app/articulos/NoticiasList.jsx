import Image from "next/image"
import Link from "next/link"
import '@/app/globals.css'
import CarpetaVacia
 from "@/components/CarpetaVacia/CarpetaVacia"
const URL_BASE_NOTICIAS = 'https://portfolio-pilaru-back.onrender.com/api/noticias'

const fecthNoticias = () => {
    return fetch(URL_BASE_NOTICIAS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}
export default async function NoticiasList() {
    const noticias = await fecthNoticias()

    if (noticias.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-items-center ">
            {noticias.slice(0,12).map((noticia) => (
                <Link
                    href='/articulo/[id]' as={`/noticias/${noticia.id}`}
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
    )
}
