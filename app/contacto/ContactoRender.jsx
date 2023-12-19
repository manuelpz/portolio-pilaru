'use client'
import emailjs from "emailjs-com"
import { Form, Input, TextArea } from "semantic-ui-react"
import Swal from "sweetalert2"
import '@/app/contacto/contacto.css'
import RedesSociales from "@/components/RedesSociales"

const SERVICE_ID = "service_y4b2hap"
const TEMPLATE_ID = "template_ifgiakn"
const USER_ID = "gC4tUjuxBRdy0YPjN"
export default function ContactoRender() {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text)
                Swal.fire({
                    icon: "success",
                    title: "¡Mensaje enviado!",
                })
            },
            (error) => {
                console.log(error.text)
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
        <div className="content aparicion">
            <h1 className="text-center">
                <b>¡Ponte en contacto conmigo!</b>
            </h1>
            <div className="contacto">
                <div className="contact">
                    <div>
                        <h2 className="md:mb-6">
                            <b className="contactanos md:ml-32">Escríbeme</b>
                        </h2>
                        <Form onSubmit={handleOnSubmit}
                            className="md:ml-32">
                            <label>Email <span className="font-bold text-red-500">*</span></label>
                            <Form.Field
                                id="form-input-control-email"
                                control={Input}
                                name="from_email"
                                placeholder="Email…"
                                required
                            />
                            <br />
                            <label>Nombre<span className="font-bold text-red-500">*</span></label>
                            <Form.Field
                                id="form-input-control-last-name"
                                control={Input}
                                name="from_name"
                                placeholder="Nombre"
                                required
                            />
                            <br />
                            <label>Mensaje<span className="font-bold text-red-500">*</span></label>
                            <Form.Field
                                id="form-textarea-control-opinion"
                                control={TextArea}
                                name="user_message"
                                placeholder="Mensaje..."
                                required
                                className="text-center custom-placeholder-style"
                            />

                            <div className="grid justify-center">
                                <button className="botonContacto" type="submit">
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
                        </Form>
                    </div>
                    <div className="grid grid-rows-3 justify-items-center">
                        <h2>
                            <b className="contactanos">Sígueme en mis redes</b>
                        </h2>
                        <div className="flex">
                            <RedesSociales red={"https://www.instagram.com/pilaruramos"} icono={"/iconos/instagram.svg"} />
                            <RedesSociales red={"https://www.linkedin.com/in/pilaru-ramos-b9533474/?originalSubdomain=es"} icono={"/iconos/linkedin.svg"} />
                            <RedesSociales red={"https://www.youtube.com/@PilaruRamos"} icono={"/iconos/youtube.svg"} />
                            <RedesSociales red={"https://www.facebook.com/PilaruRamoss/"} icono={"/iconos/facebook.svg"} />
                            <RedesSociales red={"https://twitter.com/pilaruramos"} icono={"/iconos/twitter.svg"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
