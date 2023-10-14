import { metadata } from "../layout"
import VideosList from "./VideosList"
export default function Videos() {
    metadata.title = "Videos | Pilar Ramos"
    metadata.description = "Ultimos videos de Pilar Ramos"
    return (
        <VideosList />
    )
}
