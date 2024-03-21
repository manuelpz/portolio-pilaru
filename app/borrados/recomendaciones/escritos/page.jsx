import { metadata } from "@/app/layout"
import Eliminado from "./eliminado"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
export default function EliminadoArticulos() {
    metadata.title = "Borrado de escritos | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <AdminValidation component={<Eliminado />} />
    )
}
