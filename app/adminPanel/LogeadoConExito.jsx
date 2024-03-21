'use client'
import CardOption from "../../components/CardOption/CardOption"

export default function LogeadoConExito() {
    return (
        <>
            <h1 className="text-center font-bold uppercase text-2xl">¡Hola! 👋🏽 ¿Qúe vamos a hacer?</h1>
            <br />
            <br />
            <div className="lg:grid lg:grid-cols-2 lg:justify-center">
                <CardOption titulo='Subir un archivo' componente='/subidas' imagen={'/adminPanel/subidas.png'} hover={''} />
                <CardOption titulo='Borrar un archivo' componente='/borrados' imagen={'/adminPanel/borrados.png'} hover={''} />
                <CardOption titulo='Recomendaciones' componente='/subidas/recomendaciones' imagen={'/adminPanel/recomendaciones.png'} hover={''} disabled={true} />
                <CardOption titulo='Eliminar una recomendación' componente='/borrados/recomendaciones' imagen={'/adminPanel/borradosRecomendaciones.png'} hover={''} disabled={true} />
            </div>
        </>
    )
}
