import AdminValidation from "@/components/AdminValidation/AdminValidation";
import LogeadoConExito from "./LogeadoConExito";
import { metadata } from "@/app/layout"

export default function AdminPanel() {
  metadata.title = "Panel de administracion | Pilar Ramos"
  metadata.description = "Administración del contenido de la web de Pilar Ramos"
  return (
    <AdminValidation component={<LogeadoConExito />} />
  )
}
