import Image from "next/image"
export default function TrabajandoEnEllo() {
    return (
        <div>
            <Image
                className="mx-auto"
                src={'/trabajandoEnEllo/trabajando-en-ello.png'}
                width={500}
                height={500}
                alt="Icono de llave inglesa" />
            <br /> <br />
            <p className="text-center text-2xl">Estamos trabajando en esta sección... ¡Muy pronto llegará!</p>
        </div>
    )
}
