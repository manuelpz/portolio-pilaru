import CardOption from "@/components/CardOption/CardOption";
import { metadata } from "@/app/layout";
export default function Recomendaciones() {
    metadata.title = "Recomendaciones | Pilar Ramos"
    metadata.description = "Recomendaciones personales de Pilar Ramos"
    return (
        <div className="text-center">
            <p className="text-2xl">¿Sobre qué te gustaría obtener una recomendación?</p>
            <p className="font-bold italic text-2xl">¡Elige tú mismo!</p>
            <br />
            <br />
            <div className="lg:grid lg:grid-cols-4 lg:justify-center">
                <CardOption titulo='Libros' componente='/recomendaciones/libros' imagen={'/recomendaciones/libros.png'} hover={''} />
                <CardOption titulo='Documentales' componente='/recomendaciones/documentales' imagen={'/recomendaciones/documentales.png'} hover={''} />
                <CardOption titulo='Escritos' componente='/recomendaciones/escritos' imagen={'/recomendaciones/escritos.png'} hover={''} />
                <CardOption titulo='Peliculas y series' componente='/recomendaciones/peliculas' imagen={'/recomendaciones/peliculas.png'} hover={''} />

            </div>
        </div>
    )
}
