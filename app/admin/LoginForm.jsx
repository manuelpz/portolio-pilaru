'use client'
import Image from "next/image"
import { useState } from "react"

const URL_BASE_USUARIOS = 'http://localhost:4000/api/usuarios'
export default function LoginForm() {
    const [user, setUser] = useState()
    const [password, setPassword] = useState('')

    const enviarDatos = async (e) => {
        e.preventDefault()
        if (user.trim().toLowerCase().length > 0 && password.trim().length > 0) {
            try {
                const userBBDD = await fetch(`${URL_BASE_USUARIOS}/${user}`).then(res => res.json())
                if (password === userBBDD[0].password) {
                    sessionStorage.setItem("usuario", user) // Guardo el usuario en uan sesion
                    userBBDD[0].loged = 1 // Establece el login a true
                    try {
                        await fetch(`${URL_BASE_USUARIOS}/${userBBDD[0].usuarioId}`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(userBBDD[0]) // Convierte el objeto en una cadena JSON
                        })
                        console.log('OK')
                        window.location.href = '/adminPanel'
                    }
                    catch (error) {
                        alert('Error al mandar informacion del usuario')
                    }

                }
                else {
                    alert('Usuario y/o contraseña incorrecto/s')
                }
            }
            catch (error) {
                alert('Este usuario no existe')
            }
        }
    }
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
                            <input onChange={(e) => { setUser(e.target.value) }} className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Introduce tu usuario" />
                        </div>

                        <div className="mb-4 text-lg">
                            <input onChange={(e) => setPassword(e.target.value)} className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" placeholder="*********" />
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
