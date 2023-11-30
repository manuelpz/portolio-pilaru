const URL_BASE_VIDEOS = 'http://localhost:4000/api/videos'

const fetchVideos = () => {
    return fetch(URL_BASE_VIDEOS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function NoticiasList() {
    const videos = await fetchVideos()
    return (
        <div className="lg:grid grid-cols-2 lg:gap-4 lg:justify-items-center">
            {videos.slice(-12).map((video) => (
                <div key={video.videoId}
                    className="aparicion mb-20 w-3/4" >
                    <h1 className="text-center font-bold uppercase">{video.titulo}</h1>
                    <div className="flex justify-center m-4">
                        <video width="640" height="480" controls>
                            <source src={video.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>
    )
}
