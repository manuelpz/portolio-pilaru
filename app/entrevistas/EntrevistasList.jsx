import '@/app/globals.css'
import Image from 'next/image'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'

const URL_BASE_ENTREVISTAS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/entrevistas'

const fetchEntrevistas = () => {
    return fetch(URL_BASE_ENTREVISTAS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function EntrevistasList() {
    const entrevistas = await fetchEntrevistas()

    if (entrevistas.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {entrevistas.slice(0, 12).map((entrevista) => (
                <div key={entrevista.id}
                    className="grid grid-cols-1 justify-items-center aparicion scroll-animation mb-12
                               lg:mb-32
                               xl:grid-cols-2 xl:pr-15" >
                    <Image className="rounded shadow-2xl justify-self-center w-28 h-28
                                      xl:w-48 xl:h-48
                                      2xl:justify-self-end"
                        src={entrevista.img ?? '/logo/icono-pilar-ramos.png'}
                        alt="Imagen relacionada con el podcast"
                        width={200}
                        height={10} />
                    <div className="m-4
                                    lg:grid lg:content-end lg:justify-items-start">
                        <h1 className="text-center font-bold uppercase mb-5 mt-5
                                       lg:mb-10">{entrevista.titulo}</h1>
                        <audio className="bg-blue-200 2xl:w-80 p-2 rounded-lg shadow-md justify-self-end" controls>
                            <source src={entrevista.entrevista} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            ))}
        </div>
    )
}
