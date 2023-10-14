'use client'
import { useState } from 'react'
const URL_BASE_VIDEOS = 'http://localhost:4000/api/videos'

export default function Subida() {
    const [titulo, setTitulo] = useState('')
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleVideoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedVideo(file)

            // Crear una vista previa del video
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    async function enviarDatos() {
        const formData = new FormData
        formData.append("video", selectedVideo)
        formData.append("titulo", titulo)
        await fetch(URL_BASE_VIDEOS, {
            method: "POST",
            body: formData
        })
        alert('Nuevo video añadido')
    }

    return (
        <div className=" flex justify-center">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nuevo video</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Titulo del video</label>
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
                                Seleccionar video
                            </label>
                            {imagePreview && (
                                <video
                                    src={imagePreview}
                                    className="w-64 h-64 object-cover mx-auto m-4" />
                            )}
                        </div>
                        <button
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar video
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
