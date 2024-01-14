import Image from "next/image"
import { metadata } from "@/app/layout"
export default async function Articulo({ params }) {
    metadata.title = 'Noticias | Pilar Ramos'
    metadata.description = 'Descubre las últimas noticias del mundo de los cuerpos de seguridad'
    const URL_BASE_NOTICIAS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/noticias'
    const { id } = params
    const fetchPost = () => {
        return fetch(`${URL_BASE_NOTICIAS}/${id}`).then(response => response.json())
    }
    const post = await fetchPost()
    const singlePost = post

    return (
        <div className="flex flex-col mr-12 ml-12 aparicion
                        lg:mr-36 lg:ml-36
                        xl:mr-36 xl:ml-36
                        2xl:mr-64 2xl:ml-64">
            <h1 className="font-bold text-center text-2xl">{singlePost.titulo}</h1>
            <h2 className="text-center italic">{`${singlePost.subtitulo}`}</h2>
            <br />
            <div className="grid grid-cols-1">
                <Image
                    className="w-40 mb-10 justify-self-center
                                       lg:!w-48"
                    alt='Imagen relacionada con la noticia'
                    src={singlePost.img != null ? singlePost.img : '/logo/icono-pilar-ramos.png'}
                    width={200}
                    height={200} />
            </div>
            <div className="grid grid-cols-1">
                <pre className="text-justify p-4 w-full max-w-screen whitespace-pre-line overflow-hidden">
                    {singlePost.descripcion}
                </pre>
            </div>
            {singlePost.video != null &&
                <div className="mt-10 grid grid-cols-1 justify-items-center">
                    <video width="640" height="480" controls>
                        <source src={singlePost.video} type="video/mp4" />
                    </video>
                </div>
            }
        </div>
    )
}