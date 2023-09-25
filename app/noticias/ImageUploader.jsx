'use client'
import { useState } from 'react'
import Image from 'next/image';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = (e) => {
        const file = ;
        if (file) {
            setSelectedImage(URL.createObjectURL(file))
        }
    }

    return (
        <div>
                <Image
                    width={100}
                    height={100}
                    src={selectedImage}
                    alt="Imagen seleccionada"
                    className="w-32 h-32 object-cover rounded"
                />

            <label className="block mt-4 cursor-pointer text-blue-500 hover:underline">
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="img"
                    onChange={() => { e.target.files[0] }}
                />
                Select Image
            </label>
        </div>
    )
}

export default ImageUploader
