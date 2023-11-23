'use client'
import { useState } from 'react'
import Image from 'next/image'
import Swal from "sweetalert2"
import BotonVolver from '@/components/BotonVolver/BotonVolver'

const URL_BASE_NOTICIAS = 'http://localhost:4000/api/noticias'

export default function Subida() {
    const ERROR_INESPERADO = 'Error inesperado, contacte con el administrador de la web'
    const [titulo, setTitulo] = useState('')
    const [noticia, setNoticia] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleNoticiaChange = (e) => {
        setNoticia(e.target.value)
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
        const formData = new FormData()
        formData.append("img", selectedImage)
        formData.append("titulo", titulo)
        formData.append("descripcion", noticia)

        try {
            await fetch(URL_BASE_NOTICIAS, {
                method: "POST",
                body: formData,
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
        catch (e) {
            Swal.fire({
                icon: "error",
                title: ERROR_INESPERADO,
            }).then(() => {
                window.location.reload()
            })
        }
    }

    return (
        <div className="flex justify-center">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nueva noticia</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Titulo de la noticia</label>
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
                        <label htmlFor="text" className="block text-gray-600 font-medium">Descripción de la noticia</label>
                        <input
                            type="text"
                            id="noticia"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Desarrolla la noticia"
                            value={noticia}
                            onChange={handleNoticiaChange}
                            required
                        />
                    </div>
                    <div>
                        <div>
                            <div className='flex space-x-24'>
                            <label className="block py-1 cursor-pointer text-blue-500 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/2 mb-8 text-sm">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    name="img"
                                    onChange={handleImageChange}
                                />
                                {'Seleccionar imagen'}
                            </label>
                            <BotonVolver />
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
                            Publicar noticia
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
