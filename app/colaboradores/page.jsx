import { metadata } from "../layout"
import Image from "next/image"
import Twitter from "@/components/Twitter/Twitter"
import Instagram from "@/components/Instagram/Instagram"


export default function Colaboradores() {

    metadata.title = "Colaboradores | Pilar Ramos"
    metadata.description = "Colaboradores de la web de Pilar Ramos"
    return (
        <div className="grid 2xl:grid-cols-4 2xl:ml-28 aparicion">
            <div className="mt-4 text-center justify-self-center">
                <h1 className="font-bold text-3xl">EL BÚNKER</h1> <h2 className="font-bold italic text-base">POR JOSÉ DE PEDRO </h2>
                <p className="italic mb-12">Policía, escritor y creador de <br /> contenido sobre la seguridad</p>
                <div className="grid grid-cols-subgrid place-items-center">
                    <Image className="mb-12" src="/colaboradores/el-bunker.png" alt="El Bunker" width={200} height={200} />
                </div>
            </div>
            <div className="justify-self-center">
                <Instagram url={'https://www.instagram.com/p/CwNQFErt7b-/?hl=es'} />
            </div>
            <div className="mt-4 justify-self-center ">
                <h1 className="font-bold text-2xl">HILOS DE AARÓN</h1>
                <p>Hilos Novelados (Ficción)</p>
                <p className="italic mb-12"> 💚 El tuitero que te protege</p>
                <Image src="/colaboradores/hilos-de-aaron.png" alt="Hilos de Aaron" width={200} height={200} />
            </div>
            <div className="justify-self-center mt-8">
                <Twitter id='1558840645015556103' />
            </div>
        </div >
    )
}
