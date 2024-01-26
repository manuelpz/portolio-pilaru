'use client'
import '@/app/globals.css'
import { useState } from 'react'
import CarpetaVacia from '@/components/CarpetaVacia/CarpetaVacia'
import useFetchData from '@/functions/useFetchData'
import BasicLoader from '@/components/BasicLoader/BasicLoader'
import PlantillaEntrevistas from './PlantillaEntrevistas'
import Buscador from '@/components/Buscador/Buscador'

const URL_BASE_ENTREVISTAS = 'https://portfolio-back-dev-pkbc.1.us-1.fl0.io/api/entrevistas'


export default function EntrevistasList() {
    const { data, loading } = useFetchData(URL_BASE_ENTREVISTAS)

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (value) => {
        setInputValue(value)
    }


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

    if (inputValue.length > 0) {
        const filteredData = data.filter((entrevista) => {
            return entrevista.titulo.normalize('NFKD').replace(/[\u0300-\u036F]/g, '').toLowerCase().includes(inputValue.toLowerCase())
        })
        return (
            <div >
                <div className="lg:grid lg:grid-cols-1 lg:justify-items-end lg:mr-20">
                    <Buscador placeholder={'Buscar una entrevista...'} onInputChange={handleInputChange} />
                </div>
                <PlantillaEntrevistas data={filteredData} />
            </div>
        )
    }

    return (
        <div>
            <div className="lg:grid lg:grid-cols-1 lg:justify-items-end lg:mr-20">
                <Buscador placeholder={'Buscar una entrevista...'} onInputChange={handleInputChange} />
            </div>
            <PlantillaEntrevistas data={data} />
        </div>
    )
}
