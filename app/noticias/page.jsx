import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
export default function Noticias() {
    metadata.title = "Noticias | Pilar Ramos"
    metadata.description = "Ultimas noticias"
    return (
        <div>
            <Navbar />
            <section>
                <p>Pagina de noticias</p>
            </section>
        </div>
    )
}
