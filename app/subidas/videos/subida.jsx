'use client'
import { useState, useEffect } from 'react'
const URL_BASE_VIDEOS = 'http://localhost:4000/api/videos'
const URL_BASE_USUARIOS = 'http://localhost:4000/api/usuarios'
const ADMIN_ROLE = 'admin'

export default function Subida() {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [titulo, setTitulo] = useState('')
    const [usuarioBBDD, setUsuarioBBDD] = useState({})
    const [selectedVideo, setSelectedVideo] = useState('')

    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

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
        if (usuarioBBDD.length <= 0 || usuarioBBDD === undefined) alert('Este usuario no existe')
        else if (usuarioBBDD[0].password === password && usuarioBBDD[0].rol === ADMIN_ROLE) {
            const formData = new FormData
            formData.append("video", selectedVideo)
            formData.append("titulo", titulo)
            formData.append("descripcion", noticia)
            await fetch(URL_BASE_VIDEOS, {
                method: "POST",
                body: formData
            })
            alert('Nuevo video añadido')
        }
        else alert('¡ERROR! Contraseña inválida o usuario sin permisos')
    }
    useEffect(() => {
        if (usuario.length > 0) {
            fetch(URL_BASE_USUARIOS + `/${usuario}`).then(res => res.json()).then(data => setUsuarioBBDD(data))
            console.log(URL_BASE_USUARIOS + `/${usuario}`)
        }
    }, [usuario])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nuevo video</h2>
                </div>
                <form encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Tu usuario"
                            value={usuario}
                            onChange={handleUsuarioChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-600 font-medium">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Tu contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
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

                        </div>
                        <button
                            onClick={() => enviarDatos()}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Publicar noticia
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
