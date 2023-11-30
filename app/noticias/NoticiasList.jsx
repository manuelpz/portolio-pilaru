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
                        <div className="font-bold text-xl mb-2 text-center">{noticia.titulo}</div>
                        <p className="text-gray-700 text-base text-center">{noticia.subtitulo}</p>
                    </div>
                    <br />
                    <br />
                    <Link
                        className="block cursor-pointer text-blue-500 hover:underline absolute bottom-0 !right-0 p-4"
                        href='/noticias/[id]' as={`/noticias/${noticia.id}`}
                    >
                        <button
                            className="bg-[#3b8bf6] p-1 rounded text-white text-xs">
                            Leer noticia
                        </button>
                    </Link>
                </div>
            ))
            }
        </div >
    )
}
