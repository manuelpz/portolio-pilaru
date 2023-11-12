'use client'
import emailjs from "emailjs-com"
import { Form, Input, TextArea } from "semantic-ui-react"
import Swal from "sweetalert2"
import '@/app/contacto/contacto.css'

const SERVICE_ID = "service_y4b2hap"
const TEMPLATE_ID = "template_ifgiakn"
const USER_ID = "gC4tUjuxBRdy0YPjN"
export default function ContactoRender() {
    const NUMERO_DE_TELEFONO = "tel:624007966"
    const TELEFONO_OFICIAL = 624007966
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
        <div className="content">
            <h1 className="text-center">
                <b>¡Ponte en contacto conmigo!</b>
            </h1>
            <div className="contacto">
                <div className="contact">
                    <div>
                        <h2>
                            <b className="contactanos">Escríbeme</b>
                        </h2>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id="form-input-control-email"
                                control={Input}
                                label="Email"
                                name="from_email"
                                placeholder="Email…"
                                required
                            />
                            <br />
                            <Form.Field
                                id="form-input-control-last-name"
                                control={Input}
                                label="Nombre"
                                name="from_name"
                                placeholder="Nombre"
                                required
                            />
                            <br />
                            <label>Mensaje</label>
                            <Form.Field
                                id="form-textarea-control-opinion"
                                control={TextArea}
                                name="user_message"
                                placeholder="Mensaje..."
                                required
                                style={{ width: '31%' }}
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
                                    <span>Enviar</span>
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div>
                        <h2>
                            <b className="contactanos">Sígueme en mis redes</b>
                        </h2>
                        <p className="disponibilidad">
                            <i>Lunes</i> a <i>Viernes</i> <br /> <u>Mañanas</u>:{" "}
                            <b>09:30</b> a <b>14:00</b> <br /> <u>Trades</u>: <b>16:00</b> a{" "}
                            <b>20:00</b>
                        </p>
                        <div className="telefonoConjunto">
                            <p className="telefono">
                                <b>Teléfono:</b>{" "}
                                <a href={NUMERO_DE_TELEFONO}>{TELEFONO_OFICIAL}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
