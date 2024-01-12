import { metadata } from "../layout"
import PodcastsList from "./PodcastsList"
export default function Videos() {
    metadata.title = "Podcasts | Pilar Ramos"
    metadata.description = "Ultimos podcasts de Pilar Ramos"
    return (
        <PodcastsList />
    )
}
