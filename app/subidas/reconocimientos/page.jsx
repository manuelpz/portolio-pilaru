import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaReconocimientos() {
    metadata.title = "Subida de reconocimientos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
