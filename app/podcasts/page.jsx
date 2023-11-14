import { metadata } from "../layout"
import PodcastsList from "./PodcastsList"
export default function Videos() {
    metadata.title = "Videos | Pilar Ramos"
    metadata.description = "Ultimos videos de Pilar Ramos"
    return (
        <PodcastsList />
    )
}
