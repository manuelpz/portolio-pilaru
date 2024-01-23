import Image from "next/image"
import '@/app/globals.css'
import '@/app/reconocimientos/reconocimientos.css'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'
import Link from "next/link"

const URL_BASE_RECONOCIMIENTOS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/reconocimientos'

const fetchReconocimientos = () => {
    return fetch(URL_BASE_RECONOCIMIENTOS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}
export default async function ReconocimientosList() {
    const reconocimientos = await fetchReconocimientos()

    if (reconocimientos.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="grid grid cols-1 justify-items-center
                        lg:grid lg:grid-cols-1 lg:justify-items-center">
            {reconocimientos.slice(0, 12).map((reconocimiento) => (
                <div
                    key={reconocimiento.id}
                    className={`grid lg:grid-cols-2 justify-items-center w-9/12 h-9/12 rounded mb-8 relative m-4 aparicion scroll-animation
                                    lg:mb-20`}>
                    <Image
                        className="rounded efectoAgrandar shadow-2xl"
                        src={reconocimiento.img ?? '/logo/icono-pilar-ramos.png'}
                        alt="Imagen relacionada con la reconocimiento"
                        width={300}
                        height={10} />
                    <div className="font-bold text-xl mb-2 text-center mt-6
                                        lg:justify-self-start">
                        {reconocimiento.titulo.toUpperCase()}
                        <p className="text-gray-700 text-base text-center mt-5">{reconocimiento.descripcion}</p>
                        {reconocimiento.url &&
                            <div className="mt-8 transition hover:scale-125 underline"><Link className="text-blue-700" target="_blank" href={reconocimiento.url}>Más información sobre este reconocimiento</Link></div>}

                    </div>
                </div>
            ))
            }
        </div >
    )
}
