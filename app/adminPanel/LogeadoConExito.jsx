'use client'
import CardOption from "./CardOption"

export default function LogeadoConExito() {
    return (
        <>
            <h1 className="text-center font-bold uppercase text-2xl">¡Hola! 👋🏽 ¿Qúe vamos a hacer?</h1>
            <br />
            <br />
            <div className="lg:grid lg:grid-cols-5 lg:justify-center ">
                <CardOption titulo='Subir una noticia' componente='/subidas/noticias' imagen={'/adminPanel/noticias.png'} hover={''} />
                <CardOption titulo='Subir un video' componente='/subidas/videos' imagen={'/adminPanel/videos.png'} hover={''} />
                <CardOption titulo='Subir una entrevista' componente='/subidas/entrevistas' imagen={'/adminPanel/entrevistas.png'} hover={''} />
                <CardOption titulo='Subir un podcast' componente='/subidas/podcasts' imagen={'/adminPanel/podcasts.png'} hover={''} />
                <CardOption titulo='Subir un reconociento' componente='/subidas/reconocimientos' imagen={'/adminPanel/reconocimientos.png'} hover={''} />
                <CardOption titulo='Eliminar una noticia' componente='/borrados/noticias' imagen={'/adminPanel/noticias_borrado.png'} hover="hover:bg-red-500"/>
                <CardOption titulo='Eliminar un video' componente='/borrados/videos' imagen={'/adminPanel/videos_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar una entrevista' componente='/borrados/entrevistas' imagen={'/adminPanel/entrevistas_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un podcast' componente='/borrados/podcasts' imagen={'/adminPanel/podcasts_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un reconocimiento' componente='/borrados/reconocimientos' imagen={'/adminPanel/reconocimientos_borrado.png'} hover="hover:bg-red-500" />
            </div>
        </>
    )
}
