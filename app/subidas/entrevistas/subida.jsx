'use client'
import { useState } from 'react'
const URL_BASE_ENTREVISTAS = 'http://localhost:4000/api/entrevistas'

export default function Subida() {
    const [titulo, setTitulo] = useState('')
    const [selectedVideo, setSelectedVideo] = useState('')

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleVideoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedVideo(file)
        }
    }

    async function enviarDatos() {
        const formData = new FormData
        formData.append("video", selectedVideo)
        formData.append("titulo", titulo)
        formData.append("descripcion", noticia)
        await fetch(URL_BASE_ENTREVISTAS, {
            method: "POST",
            body: formData
        })
        alert('Nueva entrevista añadida')
    }

    return (
        <div className=" flex justify-center">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nueva entrevista</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Titulo de la entrevista</label>
                        <input
                            type="text"
                            id="titulo"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Inserta un titulo"
                            value={titulo}
                            onChange={handleTituloChange}
                            required
                        />
                    </div>
                    <div>
                        <div>

                            <label className="block mt-4 cursor-pointer text-blue-500 hover:underline">
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    name="video"
                                    onChange={handleVideoChange}
                                />
                                Seleccionar entrevista
                            </label>

                        </div>
                        <button
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar entrevista
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}