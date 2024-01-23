import Image from "next/image"
export default function CarpetaVacia() {
  return (
    <div>
      <Image
        className="mx-auto"
        src={'/iconos/carpeta-vacia.png'}
        width={500}
        height={500}
        alt="Carpeta vacia" />
      <p className="text-center text-2xl">Todavía no hay elementos para mostrar... ¡Pero los habrá!</p>
    </div>
  )
}
