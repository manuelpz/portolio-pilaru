'use client'
import BasicLoader from "@/components/BasicLoader/BasicLoader"
import CarpetaVacia from "@/components/CarpetaVacia/CarpetaVacia"
import useFetchData from "@/functions/useFetchData"
import PlantillaVideos from "./PlantillaVideos"
import Buscador from "@/components/Buscador/Buscador"
import { useState } from "react"

export default function ListadoVideos({ tipo }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const URL_BASE_VIDEOS_TIPO = `https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/videos/${tipo}`
    const { data, loading } = useFetchData(URL_BASE_VIDEOS_TIPO)


    if (loading) return (
        <BasicLoader />
    )

    if (data.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )

    // FILTRO POR TITULO
    if (inputValue.length > 0) {
        const filteredData = data.filter((video) => {
            return video.titulo.normalize('NFKD').replace(/[\u0300-\u036F]/g, '').toLowerCase().includes(inputValue.toLowerCase())
        })
        return (
            <div >
                <Buscador placeholder={'Buscar un video...'} onInputChange={handleInputChange} />
                <PlantillaVideos data={filteredData} />
            </div>
        )
    }

    // TODOS LOS VIDEOS
    return (
        <div>
            <Buscador placeholder={'Buscar un video...'} onInputChange={handleInputChange} />
            <PlantillaVideos data={data} />
        </div>
    )
}