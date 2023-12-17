import Image from "next/image"
import { metadata } from "@/app/layout"
export default async function Noticia({ params }) {
    metadata.title = 'Noticias | Pilar Ramos'
    metadata.description = 'Descubre las últimas noticias del mundo de los cuerpos de seguridad'
    const URL_BASE_NOTICIAS = 'http://localhost:4000/api/noticias'
    const { id } = params
    const fetchPost = () => {
        return fetch(`${URL_BASE_NOTICIAS}/${id}`).then(response => response.json())
    }
    const post = await fetchPost()
    const singlePost = post[0] // Aunque solo devuelve una noticia, viene en formato array por SQL

    return (
        <div className="flex flex-col aparicion 2xl:mr-64 2xl:ml-64 xl:mr-36 xl:ml-36 lg:mr-36 lg:ml-36 mr-12 ml-12 ">
            <h1 className="font-bold text-center text-2xl">{singlePost.titulo}</h1>
            <h2 className="text-center italic">{`"${singlePost.subtitulo}"`}</h2>
            <br />
            <p className="text-justify">{singlePost.descripcion}</p>
            <div className="flex justify-center mt-10">
                <Image
                    alt='Imagen relacionada con la noticia'
                    src={singlePost.img != null ? singlePost.img : '/logo/icono-pilar-ramos.png'}
                    width={100}
                    height={100} />
            </div>
        </div>
    )
}