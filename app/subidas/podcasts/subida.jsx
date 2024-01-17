'use client'
import AdminValidation from '@/components/AdminValidation/AdminValidation'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import { useState } from 'react'
import Swal from "sweetalert2"
import Loader from '@/components/Loader/Loader'
const URL_BASE_PODCASTS = 'http://localhost:4000/api/podcasts'

export default function Subida() {

    const ERROR_INESPERADO = 'Error inesperado, contacte con el administrador de la web'
    const [isLoading, setIsLoading] = useState(false)
    const [url, setUrl] = useState('')
    const [titulo, setTitulo] = useState('')

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }


    async function enviarDatos() {
        setIsLoading(true)
        const formData = new FormData
        formData.append("url", url)
        formData.append("titulo", titulo)
        try {
            await fetch(URL_BASE_PODCASTS, {
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
                icon: "error",
                title: ERROR_INESPERADO,
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
                    <h2 className="text-2xl font-semibold">Publicar nuevo podcast</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Titulo del podcast</label>
                        <input
                            type="text"
                            id="titulo"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Inserta el titulo del podcast"
                            value={titulo}
                            onChange={handleTituloChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">URL del podcast</label>
                        <input
                            type="text"
                            id="url"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Inserta la URL del podcast"
                            value={url}
                            onChange={handleUrlChange}
                            required
                        />
                    </div>
                    <div>
                        <BotonVolver url={"/adminPanel"} />
                        <button
                            type='button'
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar podcast
                        </button>
                    </div>
                </form>
            </div>
        </div>} />

    )
}
