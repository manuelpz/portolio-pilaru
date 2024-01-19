import { metadata } from "@/app/layout"
import ListadoPodcasts from "./ListadoPodcasts"
import CarpetaVacia from "@/components/CarpetaVacia/CarpetaVacia"

export default async function TipoPodcast({ params }) {
    metadata.title = `Podcast | Pilar Ramos`
    metadata.description = `Escucha los últimos podcasts de Pilar Ramos`
    const { tipo } = params
    const URL_BASE_PODCASTS_TIPO = `https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/podcasts/${tipo}`
    const fetchPodcasts = async () => {
        return fetch(URL_BASE_PODCASTS_TIPO, {
            next: {
                revalidate: 60 //se hace el fetch cada minuto
            }
        }).then(res => {
            if (res.status === 409) return []
            return res.json()
        })
    }

    const podcasts = await fetchPodcasts()
    if (podcasts.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <ListadoPodcasts podcasts={podcasts} />
    )
}
