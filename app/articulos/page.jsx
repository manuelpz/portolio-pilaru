import { metadata } from "../layout"
import '@/app/globals.css'
import CarpetaVacia from "@/components/CarpetaVacia/CarpetaVacia"
import ListadoArticulos from './ListadoArticulos'
const URL_BASE_NOTICIAS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/noticias'

const fecthNoticias = () => {
    return fetch(URL_BASE_NOTICIAS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}
export default async function Articulos() {
    metadata.title = "Articulos | Pilar Ramos"
    metadata.description = "Ultimos artículos publicados por Pilar Ramos"

    const noticias = await fecthNoticias()

    if (noticias.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )

    return (
        <ListadoArticulos noticias={noticias} />
    )
}


