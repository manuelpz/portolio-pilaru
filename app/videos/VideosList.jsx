import '@/app/globals.css'
import '@/app/videos/videos.css'
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
            {videos.slice(-12).map((video) => (
                <div key={video.id}
                    className={`aparicion mt-12 scroll-animation
                                `}>
                    <h1 className="text-center font-bold uppercase text-xl">{video.titulo}</h1>
                    <div className="flex justify-center m-4">
                        <video width="640" height="480" controls poster={video.poster} className='rounded h-80 object-cover'>
                            <source src={video.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>
    )
}
