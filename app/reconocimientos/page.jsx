import { metadata } from "../layout"
import ReconocimientosList from "./ReconocimientosList"
export default function Reconocimientos() {
    metadata.title = "Reconocimientos | Pilar Ramos"
    metadata.description = "Reconocimientos y premios otorgados"
    return (
        <ReconocimientosList />
    )
}
