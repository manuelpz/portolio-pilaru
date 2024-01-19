import '@/app/globals.css'
import '@/app/videos/videos.css'
import CardOption from '@/components/CardOption/CardOption'

export default function VideosOptions() {
    return (
        <div className="lg:grid lg:grid-cols-4 lg:justify-center">
            <CardOption titulo={'Apoyo'} componente={'/videos/1'} hover={''} imagen={'/videos/apoyo.png'} />
            <CardOption titulo={'Motivacion'} componente={'/videos/2'} hover={''} imagen={'/videos/motivacion.png'} />
            <CardOption titulo={'Homenajes'} componente={'/videos/3'} hover={''} imagen={'/videos/homenaje.png'} />
            <CardOption titulo={'Institucionales'} componente={'/videos/4'} hover={''} imagen={'/videos/institucionales.png'} />
            <CardOption titulo={'Opositores'} componente={'/videos/5'} hover={''} imagen={'/videos/opositores.png'} />
            <CardOption titulo={'Navidad'} componente={'/videos/6'} hover={''} imagen={'/videos/navidad.png'} />
        </div>
    )
}
