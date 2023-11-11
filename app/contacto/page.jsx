import { metadata } from "../layout"
export default function Contacto() {
  metadata.title = "Contacto | Pilar Ramos"
  metadata.description = "Contacta conmigo a traves de este link"
  return (
    <div>
      <main>
        <h1 className="font-bold text-2xl text-center">Hola👋 ¿Hablamos?</h1>
        <br />
        <p className="text-center text-sm">Ponte en contacto conmigo!</p>
      </main>
    </div>
  )
}