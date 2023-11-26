const URL_BASE_PODCASTS = 'http://localhost:4000/api/podcasts'

const fetchVideos = () => {
    return fetch(URL_BASE_PODCASTS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function NoticiasList() {
    const podcasts = await fetchVideos()
    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {podcasts.slice(-10).map((podcast) => (
                <div key={podcast.podcastId} >
                    <h1 className="text-center font-bold uppercase">{podcast.titulo}</h1>
                    <br></br>
                    <div className="flex justify-center m-4">
                        <audio className="border-4 border-blue-200"controls>
                            <source src={podcast.podcast} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            ))}
        </div>
    )
}
