import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaEntrevistas() {
    metadata.title = "Subida de entrevistas | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <Subida />
    )
}
