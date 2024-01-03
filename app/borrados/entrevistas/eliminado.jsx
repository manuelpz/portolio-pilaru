'use client'
import { useEffect, useState } from "react"
import Loader from "@/components/Loader/Loader"
import Image from "next/image"

export default function Eliminado() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res = await fetch(`https://portfolio-pilaru-back.onrender.com/api/entrevistas`)
            const data = await res.json()
            setData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const eliminarElemento = async (id) => {
        setIsLoading(true)
        try {
            await fetch(`https://portfolio-pilaru-back.onrender.com/api/entrevistas/${id}`, {
                method: 'DELETE'
            })
            const newData = data.filter(item => item.id !== id)
            setData(newData)
        }
        catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    if (isLoading) return <Loader />
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="grid grid-cols-3 justify-items-center items-center border-blue-200 border-b-4 pb-6">
                        <Image
                            src={item.img}
                            width={100}
                            height={100}
                            alt="Imagen de la entrevista a borrar" />
                        <p>{item.titulo}</p>
                        <Image
                            className="hover:cursor-pointer"
                            onClick={() => { eliminarElemento(item.id) }}
                            src='/iconos/basura.svg'
                            width={40}
                            height={40}
                            alt="Icono de basura" />
                    </div>
                )
            }
            )}
        </div>
    )
}
