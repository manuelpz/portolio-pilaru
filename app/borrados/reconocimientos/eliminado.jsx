'use client'
import { useEffect, useState } from "react"
import Loader from "@/components/Loader/Loader"
import Image from "next/image"
import ReactModal from "react-modal"

export default function Eliminado() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hoveredItemId, setHoveredItemId] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState(null)
    const URL_RECONOCIMIENTOS = process.env.URL_RECONOCIMIENTOS

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res = await fetch(URL_RECONOCIMIENTOS)
            const data = await res.json()
            setData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const handleHover = (id) => {
        setHoveredItemId(id)
    }

    const openModal = (id) => {
        setSelectedItemId(id)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setSelectedItemId(null)
        setModalIsOpen(false)
    }


    const eliminarElemento = async (id) => {
        setIsLoading(true)
        try {
            await fetch(URL_RECONOCIMIENTOS +`/${id}`, {
                method: 'DELETE'
            })
            const newData = data.filter(item => item.id !== id)
            setData(newData)
        }
        catch (error) {
            console.log(error)
        }
        setModalIsOpen(false)
        setIsLoading(false)
    }

    if (isLoading) return <Loader />
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="grid grid-cols-3 justify-items-center items-center border-blue-200 border-b-4 pb-6 mt-6">
                        <Image
                            src={item.img}
                            width={100}
                            height={100}
                            alt="Imagen del reconocimiento a borrar" />
                        <p>{item.titulo}</p>
                        <Image
                            onMouseEnter={() => handleHover(item.id)}
                            onMouseLeave={() => handleHover(null)}
                            className="hover:cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                            onClick={() => openModal(item.id)}
                            src={hoveredItemId === item.id ? '/iconos/basura-abierta.svg' : '/iconos/basura.svg'}
                            width={40}
                            height={40}
                            alt="Icono de basura" />
                        <ReactModal
                            ariaHideApp={false}
                            isOpen={modalIsOpen && selectedItemId === item.id}
                            onRequestClose={closeModal}
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
                                <p className="text-center">¿Estás seguro de que quieres eliminar este reconocimiento?</p>
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
