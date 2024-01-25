'use client'
import AdminValidation from '@/components/AdminValidation/AdminValidation'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import { useState, useEffect } from 'react'
import Swal from "sweetalert2"
import Loader from '@/components/Loader/Loader'
const URL_BASE_ENTREVISTAS = 'https://portfolio-pilaru-back.onrender.com/api/entrevistas'

export default function Subida() {


    const ERROR_INESPERADO = 'Error inesperado, contacte con el administrador de la web'
    const [isLoading, setIsLoading] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [entrevista, setEntrevista] = useState('')
    const [comentario, setComentario] = useState('')
    
    useEffect(() => {
        if (comentario.length > 350) {
            Swal.fire({
                icon: "error",
                title: "El comentario no puede superar los 350 caracteres",
            }).then(() => {
                setComentario(comentario.substring(0, 350))
            })
        }
    }, [comentario])


    const handleComentarioChange = (e) => {
        setComentario(e.target.value)
    }

    const handleEntrevistaChange = (e) => {
        setEntrevista(e.target.value)
        console.log(e.target.value)
    }

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
        console.log(e.target.value)
    }

    async function enviarDatos() {
        setIsLoading(true)
        const formData = new FormData
        formData.append("titulo", titulo)
        formData.append("entrevista", entrevista)
        console.log(formData)

        try {
            await fetch(URL_BASE_ENTREVISTAS, {
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
                                }).then(() => {
                                    window.location.reload()
                                })
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
        <AdminValidation component={
            <div className="flex justify-center">
                <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">Publicar nueva entrevista</h2>
                    </div>
                    <form encType="multipart/form-data" className="space-y-4">
                        <div>
                            <label htmlFor="text" className="block text-gray-600 font-bold">Titulo de la entrevista</label>
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
                            <label htmlFor="text" className="block text-gray-600 font-bold">¿Quieres añadir un comentario (descripción)?</label>
                            <textarea
                                id="comentario"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Inserta un comentario al vídeo"
                                value={comentario}
                                onChange={handleComentarioChange}
                                required
                            />
                        </div>
                        <div>
                            <div>
                                <div className='pb-8'>
                                    <label htmlFor="text" className="block text-gray-600 font-bold">Link de la entrevista</label>
                                    <input
                                        type="text"
                                        id="entrevista"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        placeholder="Inserta el link de la entrevista"
                                        value={entrevista}
                                        onChange={handleEntrevistaChange}
                                        required
                                    />
                                </div>
                                <BotonVolver url={"/subidas"} />
                            </div>
                            <button
                                type='button'
                                onClick={() => enviarDatos()}
                                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Publicar entrevista
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        } />

    )
}
