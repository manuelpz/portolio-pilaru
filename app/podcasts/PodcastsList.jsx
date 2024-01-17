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
        <div className="lg:grid lg:grid-cols-1">
            <h1 className='uppercase font-extrabold text-center text-2xl m-4'>¡Descubre todos los podcasts en <Link className='text-blue-700 text-2xl italic underline hover:cursor-pointer' href={'https://www.ivoox.com/podcast-pilaru-ramos_sq_f1699828_1.html'}>mi perfil de Ivoox</Link>!</h1>
            <p className='md:m-24 md:mt-4 m-8 font-semibold text-gray-700'>¡Te doy la bienvenida a este espacio dedicado en cada episodio, a exaltar, honrar, respaldar, apoyar y brindar reconocimiento
                a quienes arriesgan sus vidas para protegernos.

                Este espacio no solo es una ventana a conocer de su valentía y sacrificio sino también un tributo a la dedicación  incansable para mantenernos seguros.

                Conocerás impactantes historias, su forma de vida, sus desafíos y logros. Que destacan la vocación de quienes salvaguardan nuestra seguridad, en el ámbito público y privado, trabajando incansablemente, analizando el papel crucial que desempeñan en nuestra sociedad,
                detrás y delante de sus uniformes.

                Si tienes interés en comprender más sobre el complejo mundo de la seguridad y quieres formar parte de una comunidad comprometida con el respaldo a nuestros servidores públicos ¡has llegado al lugar adecuado! </p>
            {podcasts.slice(0, 12).map((podcast) => (
                <div key={podcast.id}
                    className="grid grid-cols-1 justify-items-center aparicion scroll-animation mb-12 ml-12 mr-12
                                lg:ml-32 lg:mr-32" >
                    <iframe title={podcast.id} src={podcast.url} width="100%" height="250px" loading="lazy" />
                </div>
            ))}
        </div>

    )
}
