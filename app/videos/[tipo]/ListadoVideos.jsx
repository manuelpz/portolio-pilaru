'use client'
import { useState } from "react"
export default function ListadoVideos({ videos }) {
    const [contador, setContador] = useState(0)
    const handleClick = () => {
        setContador(contador + 12)
    }
        return (
            <div className="mb-8">
                <div className="grid  h-1/2 xl:grid-cols-2 lg:justify-items-center lg:ml-10">
                    {videos.slice(0, 12 + contador).map((video) => (
                        <div key={video.id} className={`aparicion mt-12 scroll-animation w-full`}>
                            <h1 className="text-center font-bold uppercase text-xl">{video.titulo}</h1>
                            <br />
                            {video.comentario && <p className="text-justify mx-6 lg:mx-24 xl:mx-12">{video.comentario}</p>}
                            <br />
                            <div className="flex mt-4 justify-center lg:m-4">
                                <video width={640} height={480} controls poster={video.poster} className='lg:rounded'>
                                    <source src={video.video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
                {videos.length > 12 + contador && <div className="grid grid-cols-1 justify-items-center">
                    <button type="button" className="transition hover:scale-110 hover:bg-blue-300 hover:text-white border border-2 border-black p-1 rounded-3xl font-bold md:w-1/6 " onClick={handleClick}>
                        Mostrar más
                    </button>
                </div>}
            </div>
        )
    }
