/* eslint-disable react/no-unescaped-entities */
import { metadata } from "../layout"
import Navbar from "@/components/Navbar"
import Image from "next/image"
export default function About() {
    metadata.title = "Sobre mi | Pilar Ramos"
    metadata.description = "Descubre quien soy, a qué me dedico, mi trayectoria profesional"
    return (
    <div>
        <Navbar />
        <main className="flex mb-4">
            <div className="w-1/2">
                <Image
                    className="rounded-full"
                    width={500}
                    height={100}
                    alt="Imagen de perfil de Pilar Ramos" src="/about/pilar-ramos.jpeg" />
            </div>
            <p className="w-1/2">Informacion a detallar en este apartado</p>
        </main>
    </div>
    )
}