'use client'
import React, { useState } from 'react';
import useFetchData from '@/functions/useFetchData';
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia';
import BasicLoader from '@/components/BasicLoader/BasicLoader';

export default function ListadoPodcasts({ tipo }) {
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 12);
    }
    const URL_BASE_PODCASTS_TIPO = `https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/podcasts/${tipo}`
    const { data, loading } = useFetchData(URL_BASE_PODCASTS_TIPO)

    if (loading) return (
        <div className="grid grid-cols-1 justify-items-center">
            <BasicLoader />
        </div>
    )

    if (data.length === 0) return (
        <div className="grid grid-cols-1 justify-items-center">
            <CarpetaVacia />
        </div>
    )

    return (
        <div className="mb-8">
            <div>
                {data.slice(0, 12 + contador).map((podcast) => (
                    <div
                        key={podcast.id}
                        className="grid grid-cols-1 justify-items-center aparicion scroll-animation mb-12 ml-12 mr-12 lg:ml-32 lg:mr-32"
                    >
                        <iframe title={podcast.id} src={podcast.url} width="100%" height="250px" loading="lazy" />
                    </div>
                ))}
            </div>
            {data.length > 12 + contador && (
                <div className="grid grid-cols-1 justify-items-center">
                    <button
                        type="button"
                        className="transition hover:scale-110 hover:bg-blue-300 hover:text-white border border-2 border-black p-1 rounded-3xl font-bold md:w-1/6"
                        onClick={handleClick}
                    >
                        Mostrar más
                    </button>
                </div>
            )}
        </div>
    );
}
