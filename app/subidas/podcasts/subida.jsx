'use client'
import AdminValidation from '@/components/AdminValidation/AdminValidation'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import Loader from '@/components/Loader/Loader'
const URL_PODCASTS = 'https://portfolio-pilaru-back.onrender.com/api/podcasts'
const URL_TIPOPODCAST = 'https://portfolio-pilaru-back.onrender.com/api/tipoPodcast'



export default function Subida() {
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res = await fetch(URL_TIPOPODCAST)
            const data = await res.json()
            setTipos(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const [isLoading, setIsLoading] = useState(false)
    const [url, setUrl] = useState('')
    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState('')
    const [tipos, setTipos] = useState([])


    const handleTipoChange = (e) => {
        setTipo(e.target.value)
    }

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
        formData.append("tipo", tipo)

        try {
            await fetch(URL_PODCASTS, {
                method: "POST",
                body: formData
            })
                .then(res => {
                    if (res.status == 409) {
                        res.json()
                            .then(data => {
                                setIsLoading(false)
                                Swal.fire({
                                    icon: "error",
                                    title: data.message,
                                })
                            })
                    }
                    else {
                        res.json()
                            .then(data => {
                                setIsLoading(false)
                                Swal.fire({
                                    icon: "success",
                                    title: data.message,
                                })
                            })
                            .then(() => {
                                window.location.reload()
                            })
                    }
                })
        }
        catch (error) {
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
                    <h2 className="text-2xl font-semibold">Publicar nuevo podcast</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-bold">Titulo del podcast</label>
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
                        <label htmlFor="text" className="block text-gray-600 font-bold">URL del podcast</label>
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
                    <label className="block text-black font-bold font-bold">¿A qué sección lo añadimos?</label>
                    <select onChange={handleTipoChange} className='border border-1 border-black rounded' name="podcastsSelect">
                        <optgroup label="Selecciona una opción">
                            {tipos.map((tipo) => (
                                <option key={tipo.id} value={tipo.id}>{tipo.tipo}</option>

                            ))}
                        </optgroup>
                    </select>
                    <div>
                        <BotonVolver url={"/subidas"} />
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
