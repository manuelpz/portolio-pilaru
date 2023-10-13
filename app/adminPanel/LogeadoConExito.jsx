'use client'

import CardOption from "./CardOption"

export default function LogeadoConExito({ user }) {
    return (
        <div>
            <h1 className="font-bold">Bienvenida {user.usuario}</h1>
            <p>¿Qué quieres hacer?</p>
            <div>
                <CardOption titulo='Nueva noticia' />
            </div>
        </div>
    )
}