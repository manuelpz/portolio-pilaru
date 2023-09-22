import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
export default function Videos() {
    metadata.title = "Videos | Pilar Ramos"
    metadata.description = "Videos"
    return (
        <div>
            <Navbar />
            <main>
                <p>Pagina de videos</p>
            </main>
        </div>
    )
}
