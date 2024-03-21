import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaDocumentales() {
    metadata.title = "Subida de documentales | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
