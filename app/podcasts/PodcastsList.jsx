import Image from "next/image"
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {podcasts.slice(-10).map((podcast) => (
                <div key={podcast.podcastId}
                    className="grid grid-cols-2 justify-items-start aparicion mb-32 scroll-animation" >
                    <Image className="rounded shadow-2xl justify-self-center"
                        src={podcast.img ?? '/logo/icono-pilar-ramos.png'}
                        alt="Imagen relacionada con el podcast"
                        width={200}
                        height={10} />
                    <div className="lg:grid lg:content-end m-4">
                    <h1 className="text-center font-bold uppercase ">{podcast.titulo}</h1>
                        <audio className="justify-self-end"controls>
                            <source src={podcast.podcast} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            ))}
        </div>
    )
}
