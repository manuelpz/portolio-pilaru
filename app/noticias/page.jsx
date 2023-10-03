import { metadata } from "../layout"
import Navbar from "@/components/Navbar/Navbar"
import NoticiasList from "./NoticiasList"
export default function Noticias() {
    metadata.title = "Noticias | Pilar Ramos"
    metadata.description = "Ultimas noticias"


    return (
        <div>
            <Navbar />
            <main>
                <NoticiasList />
            </main>
        </div>
    )
}
