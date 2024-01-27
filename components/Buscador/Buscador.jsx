import { useState } from "react"
export default function Buscador({ placeholder, onInputChange }) {

    const [isClicked, setIsClicked] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        onInputChange(value);
    }

    return (
        <div className="grid grid-cols-1 justify-items-end lg:mr-20 mr-6">
            <input
                className="text-base h-12 lg:w-64 w-40  rounded-full bg-blue-200 border-2 border-blue-500 p-4 placeholder-blue-600 focus:text-blue-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 font-bold"
                placeholder={isClicked ? '' : placeholder}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
                onChange={handleChange}

            />
        </div >
    )
}
