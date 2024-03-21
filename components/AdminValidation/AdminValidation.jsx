'use client'
import Loader from "@/components/Loader/Loader"
import { useEffect, useState } from "react"
import ErrorLogin from "@/app/adminPanel/ErrorLogin"
export default function AdminValidation({ component }) {
    const URL_USUARIOS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/usuarios'
    const [usuario, setUsuario] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async (user) => {
            const data = await fetch(`${URL_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data.loged)
            setLoading(false)
        }
        if (window.sessionStorage.getItem("usuario") !== undefined && window.sessionStorage.getItem("usuario") !== null) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
        else setLoading(false)
    }, [])
    if (loading)
        return <Loader />
    return (
        usuario && usuario == 1 ? component : <ErrorLogin />
    )
}
