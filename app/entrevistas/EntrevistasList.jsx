import '@/app/globals.css'
const URL_BASE_ENTREVISTAS = 'http://localhost:4000/api/entrevistas'

const fetchEntrevistas = () => {
    return fetch(URL_BASE_ENTREVISTAS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function EntrevistasList() {
    const entrevistas = await fetchEntrevistas()
    return (
        <div className="lg:grid grid-cols-2 lg:justify-items-center">
            {entrevistas.slice(-12).map((entrevista, index) => (
                <div key={entrevista.entrevistaId} 
                    className={`aparicion mt-12 scroll-animation ${index % 2 == 0 ? '2xl:-mr-24' : '2xl:-ml-24'}`}>
                    <h1 className="text-center font-bold uppercase">{entrevista.titulo}</h1>
                    <div className="flex justify-center m-4">
                        <video width="640" height="480" controls>
                            <source src={entrevista.entrevista} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>
    )
}
