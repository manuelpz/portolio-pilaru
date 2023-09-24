import { metadata } from "../../layout"
import Navbar from "@/components/Navbar"
export default function SubidaVideos() {
    metadata.title = "Subida de videos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <div>
            <Navbar />
            <main>
                <p>Subida de videos</p>
            </main>
        </div>
    )
}
