import { useState } from "react"
export default function Buscador({placeholder, onInputChange}) {

    const [isClicked, setIsClicked] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        onInputChange(value);
    }

    return (
        <input
            className=" h-12 w-52 rounded-full bg-blue-200 text-xl border-2 border-blue-500 p-4 placeholder-blue-600 focus:text-blue-950 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 font-bold"
            placeholder={isClicked ? '' : placeholder}
            onFocus={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
            onChange={handleChange}

        />
    )
}
