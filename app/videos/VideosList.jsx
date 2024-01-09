import '@/app/globals.css'
import '@/app/videos/videos.css'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'

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
    if (videos.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="grid lg:grid-cols-2 lg:justify-items-center lg:mx-8">
            {videos.slice(-12).map((video, index) => (
                <div key={video.id} className={`aparicion mt-12 scroll-animation ${index === 0 ? 'col-span-2 lg:col-span-1' : 'lg:col-span-1'} w-full`}>
                    <h1 className="text-center font-bold uppercase text-xl">{video.titulo}</h1>
                    <div className="flex justify-center m-4">
                        <video width={640} height={480} controls poster={video.poster} className='rounded'>
                            <source src={video.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>


    )
}
