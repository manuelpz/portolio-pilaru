'use client'
import CardOption from "./CardOption"

export default function LogeadoConExito({ user, componente }) {
    return (
        <>
            <h1 className="text-center font-bold uppercase">Bienvenida {user.usuario}</h1>
            <p className="text-center">¿Qué quieres hacer?</p>
            <br />
            <div className="lg:flex lg:justify-center lg:space-x-20">
                <CardOption titulo='Subir una noticia' componente='/subidas/noticias' />
                <CardOption titulo='Subir un video' componente='/subidas/videos' />
                <CardOption titulo='Subir una entrevista' componente='/subidas/entrevistas' />
                <CardOption titulo='Subir un podcast' componente='/subidas/podcasts' />
            </div>
        </>
    )
}