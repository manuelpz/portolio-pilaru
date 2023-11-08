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
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
            <h1 className="font-bold text-center col-span-3">NOTICIAS</h1>
            {noticias.slice(0, 10).map((noticia) => (
                <div
                    key={noticia.id}
                    className="max-w-sm rounded overflow-hidden shadow-xl mb-8 relative">
                    <div className="flex justify-center">
                        <Image
                            className="flex items-center"
                            src={noticia.img != null ? noticia.img : '/logo/icono-pilar-ramos.png'}
                            alt="Imagen relacionada con la noticia"
                            width={100}
                            height={10} />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{noticia.titulo}</div>
                        <p className="text-gray-700 text-base text-center">{noticia.descripcion}</p>
                    </div>
                    <br />
                    <br />
                    <Link
                        className="block mt-4 cursor-pointer text-blue-500 hover:underline absolute bottom-0 !right-0 p-4"
                        href='/noticias/[id]' as={`/noticias/${noticia.id}`}
                    >Leer noticia completa</Link>
                </div>
            ))}
        </div>
    )
}
