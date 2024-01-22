import { metadata } from "@/app/layout"
import ListadoVideos from "./ListadoVideos"

export default async function TipoPodcast({params}) {
    metadata.title = `Videos | Pilar Ramos`
    metadata.description = `No te pierdas los últimos videos de Pilar Ramos`
    const { tipo } = params
    return (
        <ListadoVideos tipo = {tipo} />
    )
}
