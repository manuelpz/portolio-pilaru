'use client'
import Image from "next/image"
import Link from "next/link"
export default function BotonVolver() {
    return (
        <Link className="flex block py-1 cursor-pointer text-blue-500 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2 mb-8 text-sm justify-center items-center"
            href={"/adminPanel"}>
            <Image
                alt="Icono de una flecha hacia atrás"
                width={20}
                height={20}
                src={'/iconos/flechaAtras.svg'} />
            Volver
        </Link>
    )
}
