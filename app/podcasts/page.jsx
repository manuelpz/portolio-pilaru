import { metadata } from "../layout"
import PodcastsOptions from "./PodcastOptions"
export default function Videos() {
    metadata.title = "Podcasts | Pilar Ramos"
    metadata.description = "Ultimos podcasts de Pilar Ramos"
    return (
        <PodcastsOptions />
    )
}
