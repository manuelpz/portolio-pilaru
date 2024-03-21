'use client'
import { useState } from 'react'
import Image from 'next/image'
import Swal from "sweetalert2"
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import AdminValidation from '@/components/AdminValidation/AdminValidation'
import Loader from '@/components/Loader/Loader'

const URL_RECONOCIMIENTOS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/reconocimientos'

export default function Subida() {
    const [isLoading, setIsLoading] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [url, setUrl] = useState('')

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value)
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)

            // Crear una vista previa de la imagen
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    async function enviarDatos() {
        setIsLoading(true)
        const formData = new FormData()
        formData.append("img", selectedImage)
        formData.append("titulo", titulo)
        formData.append("descripcion", descripcion)
        formData.append("url", url)

        try {
            await fetch(URL_RECONOCIMIENTOS, {
                method: "POST",
                body: formData,
            })
                .then(res => (res.json()))
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
        catch (e) {
            setIsLoading(false)
            Swal.fire({
                icon: "error",
                title: 'Error inesperado, contacte con el administrador de la web',
            }).then(() => {
                window.location.reload()
            })
        }
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <AdminValidation component={<div className="flex justify-center">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nuevo reconocimiento</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-bold">Nombre del reconociemto</label>
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
                        <label htmlFor="text" className="block text-gray-600 font-bold">Link/URL del reconocimiento</label>
                        <input
                            type="text"
                            id="url"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Inserta una URL (OPCIONAL)"
                            value={url}
                            onChange={handleUrlChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="text" className="font-bold block text-gray-600 font-bold">Presume tu reconocimiento</label>
                        <textarea
                            id="noticia"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Comenta algo sobre este reconocimiento"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            required
                        />
                    </div>
                    <div>
                        <div>
                            <div className='flex space-x-24'>
                                <label className="font-bold block py-1 cursor-pointer text-blue-500 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2 mb-8 text-sm">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        name="img"
                                        onChange={handleImageChange}
                                    />
                                    {'Seleccionar imagen'}
                                </label>
                                <BotonVolver url={"/subidas"} />
                            </div>
                            {imagePreview && (
                                <Image
                                    alt="Vista previa de la imagen a subir"
                                    className="w-64 h-64 object-cover mx-auto m-4"
                                    src={imagePreview}
                                    width={200}
                                    height={200}
                                />
                            )}
                        </div>
                        <button
                            type='button'
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar reconocimiento
                        </button>
                    </div>
                </form>
            </div>
        </div>} />
    )
}
