'use client'
import Loader from "@/components/Loader/Loader"
import { useEffect, useState } from "react"
import ErrorLogin from "@/app/adminPanel/ErrorLogin"
export default function AdminValidation({ component }) {
    const URL_BASE_USUARIOS = 'https://portflio-back-dev-mxxn.4.us-1.fl0.io/api/usuarios'
    const [usuario, setUsuario] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async (user) => {
            const data = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
            setUsuario(data[0])
        }
        if (window.sessionStorage.getItem("usuario") !== undefined) {
            fetchData(window.sessionStorage.getItem("usuario"))
        }
        setLoading(false)
    }, [])
    if (loading)
        return <Loader />
    return (
        usuario?.loged == 1 ? component : <ErrorLogin />
    )
}
