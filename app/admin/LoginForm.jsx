'use client'
import Image from "next/image"
import { useState } from "react"
import Loader from "@/components/Loader/Loader"

const URL_BASE_USUARIOS = 'https://portfolio-pilaru-back.onrender.com/api/usuarios'
export default function LoginForm() {
    const [user, setUser] = useState()
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const enviarDatos = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (user && user.trim().toLowerCase().length > 0 && password.trim().length > 0) {
            try {
                const userBBDD = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
                if (password.trim().toLocaleLowerCase() === userBBDD.password.trim().toLocaleLowerCase()) {
                    sessionStorage.setItem("usuario", user) // Guardo el usuario en una sesion
                    userBBDD.loged = 1 // Establece el login a true
                    try {
                        await fetch(`${URL_BASE_USUARIOS}/${userBBDD.usuarioid}`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userBBDD) // Convierte el objeto en una cadena JSON
                        })
                        setIsLoading(false)
                        window.location.href = '/adminPanel'
                    }
                    catch (error) {
                        setIsLoading(false)
                        alert('Error al mandar informacion del usuario')
                    }

                }
                else {
                    setIsLoading(false)
                    alert('Usuario y/o contraseña incorrecto/s')
                }
            }
            catch (error) {
                setIsLoading(false)
                alert('Este usuario no existe')
            }
        }
    }
    if (isLoading) return (<Loader />)
    return (
        <div className="flex w-full items-center justify-center ">
            <div className="rounded-xl bg-blue-200 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <Image src="/logo/icono-pilar-ramos.png" width={80} height={150} alt="Icono Pilar Ramos" />
                        <h1 className="mb-2 text-2xl">Pilar Ramos</h1>
                        <span className="text-blue-800">Introduce tus credenciales</span>
                    </div>
                    <form>
                        <div className="mb-4 text-lg">
                            <input onChange={(e) => { setUser(e.target.value) }} className="rounded-3xl border-none px-6 py-2 text-center text-black placeholder-black focus:placeholder-white shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Introduce tu usuario" />
                        </div>

                        <div className="mb-4 text-lg">
                            <input onChange={(e) => setPassword(e.target.value)} className="rounded-3xl border-none px-6 py-2 text-center text-black placeholder-black focus:placeholder-white shadow-lg outline-none backdrop-blur-md" type="Password" placeholder="Introduce tu contraseña" />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button onClick={(e) => enviarDatos(e)} className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
