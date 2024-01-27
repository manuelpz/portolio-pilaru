'use client'
import '@/app/entrevistas/entrevistas.css'
import { useState } from 'react'
export default function PlantillaEntrevistas({ data }) {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 12)
    }
    return (
        <div className="mb-8">
            <div className="grid gap-x-32 h-1/2 xl:grid-cols-2 lg:justify-items-center lg:ml-10">
                {data.slice(0, 12 + contador).map((entrevista) => (
                    <div key={entrevista.id} className={`aparicion mt-12 scroll-animation w-full`}>
                        <h1 className="text-center font-bold uppercase text-xl">{entrevista.titulo}</h1>
                        <br />
                        {entrevista.comentario && <p className="text-justify mx-6 lg:mx-24 xl:mx-12">{entrevista.comentario}</p>}
                        <br />
                        <div className="grid mt-4 justify-items-center lg:m-4 iframe-container">
                            <div dangerouslySetInnerHTML={{ __html: entrevista.entrevista }} />
                        </div>
                    </div>
                ))}
            </div>
            {data.length > 12 + contador && <div className="grid grid-cols-1 justify-items-center">
                <button type="button" className="transition hover:scale-110 hover:bg-blue-300 hover:text-white border border-2 border-black p-1 rounded-3xl font-bold md:w-1/6 mt-12" onClick={handleClick}>
                    Mostrar más
                </button>
            </div>}
        </div>
    )
}
