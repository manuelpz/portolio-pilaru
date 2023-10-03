import { metadata } from "../layout"
import Navbar from "@/components/Navbar/Navbar"
export default function Contacto() {
    metadata.title = "Contacto | Pilar Ramos"
    metadata.description = "Contacta conmigo a traves de este link"
    return (
        <div>
            <Navbar />
            <main>
                <p>Pagina de Videos</p>
            </main>
        </div>
    )
}
