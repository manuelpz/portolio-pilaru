import Image from "next/image"
import Link from "next/link"
import '@/components/CardOption/cardOption.css'
export default function CardOption({ titulo, componente, imagen, hover, disabled }) {
    return (
        <Link className={`mx-4 !mb-4 perfil ${disabled ? 'pointer-events-none' : ''}`} href={componente} >
            <div className={`flex flex-col rounded-xl bg-whiteq text-gray-700 shadow-md m-6 ${hover}`}>
                <div className={`flex justify-center rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none`}>
                    <Image
                        width={100}
                        height={100}
                        src={imagen}
                        alt="Logo Pilar Ramos"
                    />
                </div>
                <div className="p-6">
                    <h4 className="text-center block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {titulo}
                    </h4>
                    {disabled && <p className="text-center text-sm text-gray-500">Próximamente</p>}
                </div>
            </div>
        </Link>
    )
}