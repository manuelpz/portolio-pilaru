import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaNoticias() {
    metadata.title = "Subida de reconocimientos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
