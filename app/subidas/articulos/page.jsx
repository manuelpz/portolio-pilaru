import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaArticulos() {
    metadata.title = "Subida de artículos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
