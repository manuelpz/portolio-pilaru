import CardOption from "@/components/CardOption/CardOption"
import AdminValidation from "@/components/AdminValidation/AdminValidation"
import { metadata } from "@/app/layout"
export default function Subidas() {
    metadata.title = "Subidas | Pilar Ramos"
    metadata.description = "Subida del contenido de la web de Pilar Ramos"
    return (
        <AdminValidation component={
            <div className="lg:grid lg:grid-cols-5 lg:justify-center">
                <CardOption titulo='Subir un articulo' componente='/subidas/articulos' imagen={'/adminPanel/articulos.png'} hover={''} />
                <CardOption titulo='Subir un video' componente='/subidas/videos' imagen={'/adminPanel/videos.png'} hover={''} />
                <CardOption titulo='Subir una entrevista' componente='/subidas/entrevistas' imagen={'/adminPanel/entrevistas.png'} hover={''} />
                <CardOption titulo='Subir un podcast' componente='/subidas/podcasts' imagen={'/adminPanel/podcasts.png'} hover={''} />
                <CardOption titulo='Subir un reconociento' componente='/subidas/reconocimientos' imagen={'/adminPanel/reconocimientos.png'} hover={''} />
            </div>
        } />

    )
}
