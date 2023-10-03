import { metadata } from "../../layout"
import Navbar from "@/components/Navbar/Navbar"
import Subida from "./subida"
export default async function SubidaNoticias() {
    metadata.title = "Subida de videos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <div>
            <Navbar />
            <main>
                <Subida />
            </main>
        </div>
    )
}
