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
        <div className="grid  h-1/2 xl:grid-cols-2 lg:justify-items-center lg:ml-10">
            {videos.slice(12).map((video) => (
                <div key={video.id} className={`aparicion mt-12 scroll-animation w-full`}>
                    <h1 className="text-center font-bold uppercase text-xl">{video.titulo}</h1>
                    <br />
                    {video.comentario && <p className="text-justify mx-6 lg:mx-24 xl:mx-12">{video.comentario}</p>}
                    <br />
                    <div className="flex mt-4 justify-center lg:m-4">
                        <video width={640} height={480} controls poster={video.poster} className='lg:rounded'>
                            <source src={video.video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            ))}
        </div>


    )
}
