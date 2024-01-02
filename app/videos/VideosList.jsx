import '@/app/globals.css'
const URL_BASE_VIDEOS = 'https://portfolio-pilaru-back.onrender.com/api/videos'

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
        <div className="grid-cols-2
                        lg:grid lg:justify-items-center">
            {videos.slice(-12).map((video, index) => (
                <div key={video.videoId}
                    className={`aparicion mt-12 scroll-animation
                                ${index % 2 == 0 ? '2xl:-mr-20' : '2xl:-ml-20'}`}>
                    <h1 className="text-center font-bold uppercase text-xl">{video.titulo}</h1>
                    <div className="flex justify-center m-4">
                        <video width="640" height="480" controls poster={video.poster}>
                            <source src={video.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>
    )
}
