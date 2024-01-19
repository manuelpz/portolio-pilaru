import { metadata } from "@/app/layout"
import ListadoVideos from "./ListadoVideos"
import CarpetaVacia from "@/components/CarpetaVacia/CarpetaVacia"

export default async function TipoPodcast({ params }) {
    metadata.title = `Videos | Pilar Ramos`
    metadata.description = `No te pierdas los últimos videos de Pilar Ramos`
    const { tipo } = params
    const URL_BASE_VIDEOS_TIPO = `https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/videos/${tipo}`
    const fetchVideos = async () => {
         return fetch(URL_BASE_VIDEOS_TIPO, {
            next: {
                revalidate: 60 //se hace el fetch cada minuto
            }
        }).then(res => {
            if (res.status === 409) return []
            return res.json()
        })
    }

    const videos = await fetchVideos()
    if (videos.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <ListadoVideos videos={videos} />
    )
}
