import Image from "next/image"
import Link from "next/link"
export default function CardOption({ titulo, componente }) {
    return (
        <Link className="mx-4 !mb-4" href={componente}>
            <div className=" flex flex-col rounded-xl bg-whiteq text-gray-700 shadow-md">
                <div className="flex justify-center rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <Image
                        width={100}
                        height={100}
                        src="/logo/icono-pilar-ramos.png"
                        alt="Logo Pilar Ramos"
                    />
                </div>
                <div className="p-6">
                    <h4 className="text-center block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {titulo}
                    </h4>
                </div>
            </div>

        </Link>
    )
}