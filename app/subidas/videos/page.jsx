import { metadata } from "../../layout"
import Subida from "./subida"
export default async function SubidaNoticias() {
    metadata.title = "Subida de videos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <div>
            <main>
                <Subida />
            </main>
        </div>
    )
}
