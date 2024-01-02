'use client'
import AdminValidation from '@/components/AdminValidation/AdminValidation'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import { useState } from 'react'
import Swal from "sweetalert2"
import Loader from '@/components/Loader/Loader'
import Image from 'next/image'
const URL_BASE_VIDEOS = 'https://portfolio-pilaru-back.onrender.com/api/videos'

export default function Subida() {
    const ERROR_INESPERADO = 'Error inesperado, contacte con el administrador de la web'
    const [isLoading, setIsLoading] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [poster, setPoster] = useState('')
    const [selectedVideo, setSelectedVideo] = useState('')
    const [imagePreview, setImagePreview] = useState(null)
    const [posterPreview, setPosterPreview] = useState(null)


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

    const handlePosterChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setPoster(file)

            // Crear una vista previa del video
            const reader = new FileReader()
            reader.onload = (e) => {
                setPosterPreview(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }
    async function enviarDatos() {
        setIsLoading(true)
        const formData = new FormData
        formData.append("video", selectedVideo)
        formData.append("titulo", titulo)
        formData.append("poster", poster)
        try {
            await fetch(URL_BASE_VIDEOS, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
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
        catch (error) {
            setIsLoading(false)
            Swal.fire({
                icon: "success",
                title: ERROR_INESPERADO,
            }).then(() => {
                window.location.reload()
            })
        }
    }

    if (isLoading) return (<Loader />)
    return (
        <AdminValidation component={<div className=" flex justify-center">
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
                            <label className="block py-1 cursor-pointer text-blue-500 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2 mb-8 text-sm">
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    name="video"
                                    onChange={handleVideoChange}
                                />
                                {`Seleccionar video`}
                            </label>
                            <div className='flex space-x-24'>
                                <label className="block py-1 cursor-pointer text-blue-500 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2 mb-8 text-sm">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        name="video"
                                        onChange={handlePosterChange}
                                    />
                                    {`Seleccionar miniatura (Vista previa)`}
                                </label>
                                <BotonVolver url={"/adminPanel"} />
                            </div>
                        </div>
                        {imagePreview && (
                            <div className='font-bold'>
                                <p>Video seleccionado: </p>
                                <video
                                    src={imagePreview}
                                    className="w-64 h-64 object-cover mx-auto m-4" />
                            </div>
                        )}
                        {posterPreview && (
                            <div className='font-bold'>
                                <p>Miniatura seleccionada: </p>
                                <Image
                                    alt="Vista previa de la miniatura del video"
                                    className="w-64 h-64 object-cover mx-auto m-4"
                                    src={posterPreview}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        )}
                        <button
                            type='button'
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar video
                        </button>
                    </div>
                </form>
            </div>
        </div>} />
    )
}
