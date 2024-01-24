import '@/app/globals.css'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'
import useFetchData from '@/functions/useFetchData'
import BasicLoader from '@/components/BasicLoader/BasicLoader'

const URL_BASE_ENTREVISTAS = 'https://portfolio-pilaru-back.onrender.com/api/entrevistas'


export default async function EntrevistasList() {
    const { data, loading } = useFetchData(URL_BASE_ENTREVISTAS)

    if (data.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )

    if (loading) return (
        <div className="grid grid-cols-1 justify-items-center">
            <BasicLoader />
        </div>
    )
    return (
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {data.slice(0, 12).map((entrevista) => (
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
