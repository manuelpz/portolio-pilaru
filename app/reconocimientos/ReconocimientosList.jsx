import Image from "next/image"
import '@/app/globals.css'
import '@/app/reconocimientos/reconocimientos.css'
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
            {reconocimientos.slice(-12).map((reconocimiento) => (
                    <div
                        key={reconocimiento.id}
                        className={`lg:mb-20 lg:grid lg:grid-cols-2 lg:justify-items-center w-9/12 h-9/12 rounded mb-8 relative m-4 aparicion scroll-animation`}>
                        <Image
                            className="rounded  shadow-2xl"
                            src={reconocimiento.img ?? '/logo/icono-pilar-ramos.png'}
                            alt="Imagen relacionada con la reconocimiento"
                            width={300}
                            height={10} />
                        <div className="font-bold text-xl mb-2 text-center lg:justify-self-start">
                            {reconocimiento.titulo.toUpperCase()}
                            <p className="text-gray-700 text-base text-center mt-5">{reconocimiento.descripcion}</p>
                        </div>
                    </div>
            ))
            }
        </div >
    )
}