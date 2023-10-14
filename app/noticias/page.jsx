import { metadata } from "../layout"
import NoticiasList from "./NoticiasList"
export default function Noticias() {
    metadata.title = "Noticias | Pilar Ramos"
    metadata.description = "Ultimas noticias"


    return (
        <NoticiasList />
    )
}
