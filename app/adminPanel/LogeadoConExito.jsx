'use client'
import CardOption from "./CardOption"

export default function LogeadoConExito() {
    return (
        <>
            <h1 className="text-center font-bold uppercase">¡Hola! 👋🏽 ¿Qúe vamos a hacer?</h1>
            <br />
            <br />
            <div className="lg:flex lg:justify-center lg:space-x-20">
                <CardOption titulo='Subir una noticia' componente='/subidas/noticias' imagen={'/adminPanel/noticias.png'} />
                <CardOption titulo='Subir un video' componente='/subidas/videos' imagen={'/adminPanel/videos.png'} />
                <CardOption titulo='Subir una entrevista' componente='/subidas/entrevistas' imagen={'/adminPanel/entrevistas.png'} />
                <CardOption titulo='Subir un podcast' componente='/subidas/podcasts' imagen={'/adminPanel/podcasts.png'} />
            </div>
        </>
    )
}
