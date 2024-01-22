import { metadata } from "@/app/layout"
import ListadoPodcasts from "./ListadoPodcasts"

export default async function TipoPodcast({ params }) {
    metadata.title = `Podcast | Pilar Ramos`
    metadata.description = `Escucha los últimos podcasts de Pilar Ramos`
    const { tipo } = params

    return (
        <ListadoPodcasts tipo={tipo} />
    )
}
