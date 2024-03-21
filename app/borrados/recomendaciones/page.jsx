import CardOption from "@/components/CardOption/CardOption"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
import { metadata } from "@/app/layout"
export default function BorradosRecomendaciones() {
    metadata.title = "Eliminado de recomendaciones | Pilar Ramos"
    metadata.description = "Borrado del contenido de la web de Pilar Ramos"
    return (
        <AdminValidation component={
            <div className="lg:grid lg:grid-cols-5 lg:justify-center">
                <CardOption titulo='Eliminar un libro' componente='/borrados/recomendaciones/libros' imagen={'/adminPanel/libros.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un documental' componente='/borrados/recomendaciones/documentales' imagen={'/adminPanel/documentales.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un escrito' componente='/borrados/recomendaciones/escritos' imagen={'/adminPanel/escritos.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar una serie/pelicula' componente='/borrados/recomendaciones/series' imagen={'/adminPanel/series.png'} hover="hover:bg-red-500" />
            </div>
        } />

    )
}
