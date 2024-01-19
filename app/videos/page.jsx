import { metadata } from "../layout"
import VideosOptions from "./VideosOptions"
export default function Videos() {
    metadata.title = "Videos | Pilar Ramos"
    metadata.description = "Ultimos videos de Pilar Ramos"
    return (
        <VideosOptions />
    )
}
