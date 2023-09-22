import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
export default function Reconocimientos() {
    metadata.title = "Reconocimientos | Pilar Ramos"
    metadata.description = "Reconocimientos y premios otorgados"
    return (
        <div>
            <Navbar />
            <main>
                <p>Pagina de reconocimientos</p>
            </main>
        </div>
    )
}
