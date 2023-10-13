import Image from "next/image"
export default function CardOption({ titulo, descripcion }) {
    return (
        <div>
            <div class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <Image
                        width={100}
                        height={100}
                        src="/logo/icono-pilar-ramos.png"
                        alt="ui/ux review check"
                    />
                </div>
                <div class="p-6">
                    <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {titulo}
                    </h4>
                    <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {descripcion}
                    </p>
                </div>
                <div class="flex items-center justify-between p-6">
                </div>
            </div>
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
        </div>
    )
}