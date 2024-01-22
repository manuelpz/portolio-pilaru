import { metadata } from "../layout"
import '@/app/globals.css'
import ListadoArticulos from './ListadoArticulos'

export default async function Articulos() {
    metadata.title = "Articulos | Pilar Ramos"
    metadata.description = "Ultimos artículos publicados por Pilar Ramos"

    return (
        <ListadoArticulos />
    )
}


