/* eslint-disable react/no-unescaped-entities */
import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
export default function About() {
    metadata.title = "Sobre mi | Pilar Ramos"
    metadata.description = "Descubre quien soy, a qué me dedico, mi trayectoria profesional"
    return (<>
        <Navbar />
        <section>
            <p>Pagina "Sobre mi"</p>
        </section>
    </>
    )
}