import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
export default function Noticias() {
    metadata.title = "Noticias | Pilar Ramos"
    metadata.description = "Ultimas noticias"


    return (
        <div>
            <Navbar />
            <main>
                <p>Pagina de noticias</p>
            </main>
        </div>
    )
}
