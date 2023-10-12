'use client'
import { createContext, useState } from "react"

export const UsuarioContext = createContext()

export default function UsuarioProvider({ children }) {
    const [data, setData] = useState()
    return (
        <UsuarioContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}
