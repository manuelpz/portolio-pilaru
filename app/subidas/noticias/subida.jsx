'use client'
import { useState } from 'react';
import { postNoticias } from '@/app/funciones/postNoticias';
const URL_BASE_NOTICIAS = 'http://localhost:4000/api/noticias'

export default function Subida() {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [titulo, setTitulo] = useState('')
    const [noticia, setNoticia] = useState('')


    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleTituloChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleNoticiaChange = (e) => {
        setNoticia(e.target.value)
    }

    async function enviarDatos() {
        const noticiaRequest = {
            titulo: titulo,
            descripcion: noticia,
        }
        postNoticias(URL_BASE_NOTICIAS, noticiaRequest)
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Publicar nueva noticia</h2>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="text" className="block text-gray-600 font-medium">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Tu correo electrónico"
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
