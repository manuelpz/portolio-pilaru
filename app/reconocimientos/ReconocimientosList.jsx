import Image from "next/image"
import Link from "next/link"
import '@/app/globals.css'
const URL_BASE_RECONOCIMIENTOS = 'http://localhost:4000/api/reconocimientos'

const fetchReconocimientos = () => {
    return fetch(URL_BASE_RECONOCIMIENTOS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}
export default async function ReconocimientosList() {
    const reconocimientos = await fetchReconocimientos()
    return (
        <div className="grid grid cols-1 justify-items-center lg:grid lg:grid-cols-1 lg:justify-items-center">
            {reconocimientos.slice(-12).map((reconocimiento, index) => (
                index % 2 == 0 ?
                    <div
                        key={reconocimiento.id}
                        className={`lg:mb-40 lg:grid lg:grid-cols-2 lg:justify-items-center w-9/12 h-9/12 rounded mb-8 relative m-4 aparicion scroll-animation}`}>
                        <Image
                            className="rounded justify-self-start"
                            src={reconocimiento.img != null ? reconocimiento.img : '/logo/icono-pilar-ramos.png'}
                            alt="Imagen relacionada con la reconocimiento"
                            width={500}
                            height={10} />
                        <div className="font-bold text-xl mb-2 text-center lg:justify-self-start">
                            {reconocimiento.titulo.toUpperCase()}
                            <p className="text-gray-700 text-base text-center mt-5">{reconocimiento.descripcion}</p>
                        </div>
                    </div>
                    : <div
                        key={reconocimiento.id}
                        className={`lg:mb-40 lg:grid lg:grid-cols-2 lg:justify-items-center w-9/12 h-9/12 rounded mb-8 relative m-4 aparicion scroll-animation}`}>
                        <div className="font-bold text-xl mb-2 text-center lg:mr-48 lg:justify-self-end">
                            {reconocimiento.titulo.toUpperCase()}
                            <p className="text-gray-700 text-base text-center mt-5">{reconocimiento.descripcion}</p>
                        </div>
                        <Image
                            className="rounded justify-self-center"
                            src={reconocimiento.img != null ? reconocimiento.img : '/logo/icono-pilar-ramos.png'}
                            alt="Imagen relacionada con la reconocimiento"
                            width={500}
                            height={10} />
                    </div>
            ))
            }
        </div >
    )
}
