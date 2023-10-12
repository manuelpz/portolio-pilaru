'use client'
import Loader from "@/components/Loader/Loader"
import { useEffect, useState } from "react"

export default function AdminPanel() {
    const URL_BASE_USUARIOS = 'http://localhost:4000/api/usuarios'
    const [usuario, setUsuario] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async (user) => {
            const data = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data)
        }
        if (window.sessionStorage.getItem("usuario") !== undefined) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
        setLoading(false)
    }, [])
    if (loading)
        return <Loader />
    return (
        usuario[0]?.loged == 1 ? <h1>Panel de administrador</h1> : <h1>No estas logeado</h1>
    )
}
