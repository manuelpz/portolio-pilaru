import { metadata } from "../layout"
import NoticiasList from "./NoticiasList"
export default function Noticias() {
    metadata.title = "Articulos | Pilar Ramos"
    metadata.description = "Ultimos artículos publicados por Pilar Ramos"


    return (
        <NoticiasList />
    )
}
