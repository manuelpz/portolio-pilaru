import AdminValidation from "@/components/AdminValidation/AdminValidation";
import LogeadoConExito from "./LogeadoConExito";

export default function AdminPanel() {
  return (
    <AdminValidation component={<LogeadoConExito />} />
  )
}
