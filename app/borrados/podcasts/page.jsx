import { metadata } from "@/app/layout"
import Eliminado from "./eliminado"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
export default function EliminadoEntrevitsas() {
    metadata.title = "Borrado de entrevistas | Pilar Ramos"
    metadata.description = "Solo para administradores"
    return (
        <AdminValidation component={<Eliminado />} />
    )
}
