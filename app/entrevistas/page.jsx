import { metadata } from "../layout"
import EntrevistasList from "./EntrevistasList"
export default function Reconocimientos() {
    metadata.title = "Entrevistas | Pilar Ramos"
    metadata.description = "Disfruta de las mejores entrevistas policiacas ofrecidas por Pilar Ramos"
    return (
        <EntrevistasList />
    )
}