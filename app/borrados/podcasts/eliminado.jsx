'use client'
import { useEffect, useState } from "react"
import Loader from "@/components/Loader/Loader"
import Image from "next/image"
import ReactModal from "react-modal"

export default function Eliminado() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res = await fetch(`https://portfolio-pilaru-back.onrender.com/api/podcasts`)
            const data = await res.json()
            setData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const eliminarElemento = async (id) => {
        setIsLoading(true)
        try {
            await fetch(`https://portfolio-pilaru-back.onrender.com/api/podcasts/${id}`, {
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
                            alt="Imagen del podcast a borrar" />
                        <p>{item.titulo}</p>
                        <Image
                            className="hover:cursor-pointer"
                            onClick={() => { eliminarElemento(item.id) }}
                            src='/iconos/basura.svg'
                            width={40}
                            height={40}
                            alt="Icono de basura" />
                        <ReactModal
                            ariaHideApp={false}
                            isOpen={modalIsOpen}
                            style={{
                                overlay: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                },
                                content: {
                                    width: "250px",
                                    height: "200px",
                                    margin: "auto",
                                },
                            }}
                        >
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-center">¿Estás seguro de que quieres eliminar este podcast?</p>
                                <div className="flex justify-center items-center space-x-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => { eliminarElemento(item.id) }}
                                    >
                                        Sí
                                    </button>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => { setModalIsOpen(false) }}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </ReactModal>
                    </div>
                )
            }
            )}
        </div>
    )
}
