import { metadata } from "../layout"
import ContactoRender from "./ContactoRender"

export default function Contacto() {
  metadata.title = "Contacto | Pilar Ramos"
  metadata.description = "Contacta conmigo a traves de este link"
  return (
    <ContactoRender />
  )
}