import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'
import Link from 'next/link'

const URL_BASE_PODCASTS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/podcasts'

const fetchPodcasts = () => {
    return fetch(URL_BASE_PODCASTS, {
        next: {
            revalidate: 60 //se hace el fetch cada minuto
        }
    }).then(res => res.json())
}

export default async function PodcastsList() {
    const podcasts = await fetchPodcasts()

    if (podcasts.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )
    return (
        <div className="lg:grid lg:grid-cols-1 lg:gap-4">
            <h1 className='font-bold text-center text-2xl mb-8'>¡Descubre todos los podcasts en <Link className='text-blue-700 text-2xl italic underline hover:cursor-pointer' href={'https://www.ivoox.com/podcast-pilaru-ramos_sq_f1699828_1.html'}>mi perfil de Ivoox</Link>!</h1>
            {podcasts.slice(0, 12).map((podcast) => (
                <div key={podcast.id}
                    className="grid grid-cols-1 justify-items-center aparicion scroll-animation mb-12 ml-12 mr-12
                               lg:mb-32 lg:ml-32 lg:mr-32" >
                    <iframe title={podcast.id} src={podcast.url} width="100%" height="250px" loading="lazy" />
                </div>
            ))}
        </div>

    )
}
