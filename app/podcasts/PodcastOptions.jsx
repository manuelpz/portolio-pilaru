import CardOption from '@/components/CardOption/CardOption'
import Link from 'next/link'

export default function PodcastsOptions() {
    return (
        <div className="lg:grid lg:grid-cols-1">
            <h1 className='uppercase font-extrabold text-center text-2xl m-4'>¡Descubre todos los podcasts en <Link className='text-blue-700 text-2xl italic underline hover:cursor-pointer' href={'https://www.ivoox.com/podcast-pilaru-ramos_sq_f1699828_1.html'}>mi perfil de Ivoox</Link>!</h1>
            <p className='md:m-24 md:mt-4 m-8 font-semibold text-gray-700'>¡Te doy la bienvenida a este espacio dedicado en cada episodio, a exaltar, honrar, respaldar, apoyar y brindar reconocimiento a quienes arriesgan sus vidas para protegernos. Este espacio no solo es una ventana a conocer de su valentía y sacrificio sino también un tributo a la dedicación incansable salvaguardando nuestra seguridad, en el ámbito público y privado, trabajando incansablemente. Conocerás impactantes historias, su forma de vida, sus desafíos y logros, analizando el papel crucial que desempeñan en nuestra sociedad, detrás y delante de sus uniformes.
                Si tienes interés en comprender más sobre el complejo mundo de la seguridad y quieres formar parte de una comunidad comprometida con el respaldo a nuestros servidores públicos ¡has llegado al lugar adecuado! </p>
            <p className='md:m-24 md:mt-4 m-8 font-semibold text-gray-700 text-center'>¿Sobre qué te gustaría escuchar?</p>
            <div className="lg:grid lg:grid-cols-4 lg:justify-center">
                <CardOption titulo={'Apoyo'} componente={'/podcasts/1'} hover={''} imagen={'/podcasts/apoyo.png'} />
                <CardOption titulo={'Motivacion'} componente={'/podcasts/2'} hover={''} imagen={'/podcasts/motivacion.png'} />
                <CardOption titulo={'Homenajes'} componente={'/podcasts/3'} hover={''} imagen={'/podcasts/homenaje.png'} />
                <CardOption titulo={'Institucionales'} componente={'/podcasts/4'} hover={''} imagen={'/podcasts/institucionales.png'} />
                <CardOption titulo={'Opositores'} componente={'/podcasts/5'} hover={''} imagen={'/podcasts/opositores.png'} />
                <CardOption titulo={'Navidad'} componente={'/podcasts/6'} hover={''} imagen={'/podcasts/navidad.png'} />
            </div>
        </div>

    )
}
