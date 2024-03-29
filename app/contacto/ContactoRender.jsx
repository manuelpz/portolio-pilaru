'use client'
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import RedesConjuntas from "@/components/RedesSociales/RedesConjuntas"
import '@/app/contacto/contacto.css'

export default function ContactoRender() {
    const SERVICE_ID = "service_ljm539c"
    const TEMPLATE_ID = "template_kv5cii8"
    const USER_ID = "gC4tUjuxBRdy0YPjN"
    const handleOnSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            () => {
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje enviado!",
                })
            },
            (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Vaya, algo fué mal",
                    text: error.text,
                })
            }
        )
        e.target.reset()
    }
    return (
        <div className=" aparicion">
            <h1 className="text-center">
                <b>¡Ponte en contacto conmigo!</b>
            </h1>
            <div className="contacto">
                <div className="contact">
                    <div>
                        <h2 className="md:mb-6">
                            <b className="contactanos md:ml-32">Escríbeme</b>
                        </h2>
                        <form
                            className="md:ml-32">
                            <label>Email <span className="font-bold text-red-500">*</span></label>
                            <input
                                id="form-input-control-email"
                                type="text"
                                name="from_email"
                                placeholder="Email…"
                                required
                            />
                            <br />
                            <label>Nombre<span className="font-bold text-red-500">*</span></label>
                            <input
                                id="form-input-control-last-name"
                                type="text"
                                name="from_name"
                                placeholder="Nombre"
                                required
                            />
                            <br />
                            <label>Mensaje<span className="font-bold text-red-500">*</span></label>
                            <textarea
                                id="form-textarea-control-opinion"
                                name="user_message"
                                placeholder="Mensaje..."
                                required
                                className="text-center custom-placeholder-style"
                            />

                            <div className="grid justify-center">
                                <button onClick={handleOnSubmit} className="botonContacto" type="submit">
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg
                                                height="24"
                                                width="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span> <b>Enviar</b></span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-rows-3 justify-items-center">
                        <h2>
                            <b className="contactanos">Sígueme en mis redes</b>
                        </h2>
                        <RedesConjuntas />
                    </div>
                </div>
            </div>
        </div>
    )
}
