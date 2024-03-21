import CardOption from "@/components/CardOption/CardOption"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
import { metadata } from "@/app/layout"
export default function SubidasRecomendaciones() {
    metadata.title = "Recomendaciones | Pilar Ramos"
    metadata.description = "Subida del contenido de la web de Pilar Ramos"
    return (
        <AdminValidation component={
            <div className="lg:grid lg:grid-cols-5 lg:justify-center">
                <CardOption titulo='Recomendar un libro' componente='/subidas/recomendaciones/libros' imagen={'/adminPanel/libros.png'} hover={''} />
                <CardOption titulo='Recomendar un documental' componente='/subidas/recomendaciones/documentales' imagen={'/adminPanel/documentales.png'} hover={''} />
                <CardOption titulo='Recomendar un escrito' componente='/subidas/recomendaciones/escritos' imagen={'/adminPanel/escritos.png'} hover={''} />
                <CardOption titulo='Recomendar una serie/pelicula' componente='/subidas/recomendaciones/series' imagen={'/adminPanel/series.png'} hover={''} />
            </div>
        } />

    )
}
