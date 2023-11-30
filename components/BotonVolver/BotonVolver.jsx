'use client'
import Image from "next/image"
import Link from "next/link"
export default function BotonVolver({url}) {
    return (
        <Link className="flex block py-1 cursor-pointer text-[#60a2fa] bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-[#60a2fa] hover:border-transparent rounded w-1/3 mb-8 text-sm justify-center items-center"
            href={url}>
            <Image className="mr-2"
                alt="Icono de una flecha hacia atrás"
                width={20}
                height={20}
                src={'/iconos/flechaAtras.svg'} />
            Volver
        </Link>
    )
}
