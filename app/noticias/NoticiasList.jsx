import Image from "next/image"
const URL_BASE_NOTICIAS = 'http://localhost:4000/api/noticias'

const fecthNoticias = () => {
    return fetch(URL_BASE_NOTICIAS).then(res => res.json())
}

export default async function NoticiasList() {
    const noticias = await fecthNoticias()
    return (
        <div className="grid grid-cols-3 gap-4">
            <h1 className="font-bold text-center col-span-3">NOTICIAS</h1>
            {noticias.slice(0, 10).map((noticia) => (
                <div key={noticia.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
                    <Image src={noticia.img != null ? noticia.img : '/logo/icono-pilar-ramos.png'}  alt="Sunset in the mountains" width={100} height={10} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">{noticia.titulo}</div>
                        <p className="text-gray-700 text-base">{noticia.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}