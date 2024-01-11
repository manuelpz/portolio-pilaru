import CardOption from "@/components/CardOption/CardOption"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
import { metadata } from "@/app/layout"
export default function Borrados() {
    metadata.title = "Borrados | Pilar Ramos"
    metadata.description = "Borrado del contenido de la web de Pilar Ramos"
    return (
        <AdminValidation component={
            <div className="lg:grid lg:grid-cols-5 lg:justify-center">
                <CardOption titulo='Eliminar una noticia' componente='/borrados/noticias' imagen={'/adminPanel/noticias_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un video' componente='/borrados/videos' imagen={'/adminPanel/videos_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar una entrevista' componente='/borrados/entrevistas' imagen={'/adminPanel/entrevistas_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un podcast' componente='/borrados/podcasts' imagen={'/adminPanel/podcasts_borrado.png'} hover="hover:bg-red-500" />
                <CardOption titulo='Eliminar un reconocimiento' componente='/borrados/reconocimientos' imagen={'/adminPanel/reconocimientos_borrado.png'} hover="hover:bg-red-500" />
            </div>
        } />

    )
}
