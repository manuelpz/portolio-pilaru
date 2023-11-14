import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaPodcast() {
    metadata.title = "Subida de podcast | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
