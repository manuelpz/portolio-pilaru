import { metadata } from '@/app/layout'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'
export default function Escritos() {
  metadata.title = "Escritos | Pilar Ramos"
  metadata.description = "Recomendacion de escritos de Pilar Ramos"
  return (
    <CarpetaVacia />
  )
}
