'use client'
import { useState } from "react"
export default function ListadoPodcasts({ podcasts }) {
    const [contador, setContador] = useState(0)
    const handleClick = () => {
        setContador(contador + 12)
        return (
            <div className="mb-8">
                <div>
                    {podcasts.slice(0, 12).map((podcast) => (
                        <div key={podcast.id}
                            className="grid grid-cols-1 justify-items-center aparicion scroll-animation mb-12 ml-12 mr-12
                                lg:ml-32 lg:mr-32" >
                            <iframe title={podcast.id} src={podcast.url} width="100%" height="250px" loading="lazy" />
                        </div>
                    ))}
                </div>
                {podcasts.length > 12 + contador && <div className="grid grid-cols-1 justify-items-center">
                    <button type="button" className="transition hover:scale-110 hover:bg-blue-300 hover:text-white border border-2 border-black p-1 rounded-3xl font-bold md:w-1/6 " onClick={handleClick}>
                        Mostrar más
                    </button>
                </div>}
            </div>
        )
    }
}
