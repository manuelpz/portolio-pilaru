'use client'
import { useState } from 'react'
const URL_BASE_PODCASTS = 'http://localhost:4000/api/podcasts'

export default function Subida() {

    const ERROR_INESPERADO = 'Error inesperado, contacte con el administrador de la web'

    const [titulo, setTitulo] = useState('')
    const [selectedVideo, setSelectedVideo] = useState('')
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
        formData.append("podcast", selectedVideo)
        formData.append("titulo", titulo)
        try{
        await fetch(URL_BASE_PODCASTS, {
            method: "POST",
            body: formData
        })
            .then(res => (res.json()))
            .then(data => {
                if (data.code == 409) {
                    Swal.fire({
                        icon: "error",
                        title: data.message,
                    })
                }
                else {
                    Swal.fire({
                        icon: "success",
                        title: data.message,
                    }).then(() => {
                        window.location.reload()
                    })
                }
            })
        }
        catch(error){
            Swal.fire({
                icon: "error",
                title: ERROR_INESPERADO,
            }).then(() => {
                window.location.reload()
            })
        }
    }

    return (
        <div className=" flex justify-center">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nuevo podcast</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Titulo del podcast</label>
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
                                    onChange={handleVideoChange} />
                                {`Seleccionar podcast`}
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
                            Publicar podcast
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
