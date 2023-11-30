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
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
            {entrevistas.slice(-12).map((entrevista) => (
                <div key={entrevista.entrevistaId} 
                    className="aparicion mt-12">
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
