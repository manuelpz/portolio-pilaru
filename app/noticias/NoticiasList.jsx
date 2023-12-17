import Image from "next/image"
import Link from "next/link"
const URL_BASE_NOTICIAS = 'http://localhost:4000/api/noticias'

const fecthNoticias = () => {
    return fetch(URL_BASE_NOTICIAS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function NoticiasList() {
    const noticias = await fecthNoticias()
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-items-center ">
            {noticias.slice(-12).map((noticia) => (
                <div
                    key={noticia.id}
                    className="w-9/12 h-9/12 rounded overflow-hidden shadow-xl bg-[#eff6ff] border-[#60a2fa] border mb-8 relative m-4 aparicion ">
                    <div className="flex justify-center pt-6" >
                        <Image
                            className="flex items-center rounded"
                            src={noticia.img != null ? noticia.img : '/logo/icono-pilar-ramos.png'}
                            alt="Imagen relacionada con la noticia"
                            width={100}
                            height={10} />
                    </div>
                    <div className="px-6 py-4">
                        <Link
                            href='/noticias/[id]' as={`/noticias/${noticia.id}`}
                        >
                            <div className="transition hover:-translate-y-1 hover:scale-110 font-bold text-xl mb-2 text-center">{noticia.titulo}</div>
                        </Link>
                        <p className="text-gray-700 text-base text-center">{noticia.subtitulo}</p>
                    </div>
                    <br />
                    <br />
                </div>
            ))
            }
        </div >
    )
}
