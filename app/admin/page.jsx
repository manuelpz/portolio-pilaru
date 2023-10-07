import Image from "next/image"
export default function Admin() {
    return (
        <div className="flex w-full items-center justify-center ">
            <div className="rounded-xl bg-blue-200 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <Image src="/logo/icono-pilar-ramos.png" width={80} height={150} alt="Icono Pilar Ramos"/>
                        <h1 className="mb-2 text-2xl">Pilar Ramos</h1>
                        <span className="text-blue-800">Introduce tus credenciales</span>
                    </div>
                    <form action="#">
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
                        </div>

                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
                        </div>
                        <div className="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}