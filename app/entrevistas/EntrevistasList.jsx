import '@/app/globals.css'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'

const URL_BASE_ENTREVISTAS = 'https://portfolio-pilaru-back.onrender.com/api/entrevistas'

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
                               lg:mb-32" >
                    <div>
                        <h1 className="text-center font-bold uppercase mb-5 mt-5
                                       lg:mb-10">{entrevista.titulo}</h1>
                        <div dangerouslySetInnerHTML={{ __html: entrevista.entrevista }} />
                    </div>
                </div>
            ))}
        </div>
    )
}
