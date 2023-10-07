import { metadata } from "../layout"
import Image from "next/image"
import RedesSociales from "@/components/RedesSociales"
import '@/app/about/about.css'
export default function About() {
    metadata.title = "Sobre mi | Pilar Ramos"
    metadata.description = "Descubre quién soy, a qué me dedico, mi trayectoria profesional"

    return (
        <div>
            <main className="lg:flex mb-4">
                <div className="lg:w-1/2 lg:pr-4">
                    <Image
                        className="rounded-full w-52 lg:w-7/12 lg:rounded-none mx-auto my-auto mb-4"
                        width={500}
                        height={100}
                        alt="Imagen de perfil de Pilar Ramos"
                        src="/about/pilar-ramos.jpeg"
                    />
                    <br />
                    <div className="lg:flex lg:justify-center hidden ">
                        <Image
                            src={'/bandera/bandera.gif'}
                            alt="bandera"
                            width={250}
                            height={250}
                        />
                    </div>
                    <p className="lg:flex lg:justify-center lg:bronze lg:text-amber-700 hidden"><strong>Pilar Ramos</strong></p>

                </div>
                <section className="lg:w-1/2 lg:pl-4 lg:pr-10">
                    <h1 className="font-bold text-center uppercase text-sky-600">Mi Pasión por la Comunicación Estratégica en Defensa y Seguridad Nacional</h1>
                    <br />
                    <p className="text-justify">Soy una apasionada de la comunicación estratégica que se ocupa de la defensa y seguridad nacional de España.</p>
                    <p className="text-justify">Años atrás, sentí una conexión profunda con aquellos que se dedican a salvar nuestra nación y promover nuestros valores. Esta pasión me llevó a abrazar mi vocación como divulgadora y comunicadora, convencida de que las historias y los logros en el ámbito de la seguridad y la defensa merecen ser compartidos con el mundo y comprendidos por todos.</p>
                    <br />
                    <p className="text-justify"><span className="font-bold text-sky-600">Mi objetivo es claro:</span> ser la voz que conecte a estas instituciones con la sociedad a la que sirven y juran proteger. Alguien que ve en la comunicación estratégica y la creación de contenido audiovisual una forma de inspirar respeto y aprecio por quienes protegen y defienden a España.</p>
                    <br />
                    <p className="text-justify">La comunicación estratégica se convirtió en mi herramienta principal para cumplir esta misión. Trabajo incansablemente para traducir la complejidad de las operaciones de seguridad y defensa en mensajes claros y accesibles.</p>
                    <br />
                    <p className="text-justify">Creo que la comprensión y el respeto por el trabajo de estas instituciones son esenciales para fortalecer nuestra sociedad. He dado vida a narraciones y documentales que resaltan la valentía y el compromiso de quienes nos cuidan y sirven. A través de estos medios, busco rendir homenaje a su labor y educar al público sobre su importancia.</p>
                    <br />
                    <p className="text-justify">He tenido el honor de colaborar con diversas instituciones y participar en proyectos de divulgación y estrategias de comunicación que buscan estrechar los lazos con la sociedad española. Cada oportunidad de compartir una historia o mensaje me llena de gratitud y me motiva a seguir adelante.</p>
                    <br />
                    <p className="text-center font-bold italic text-sky-600">Mi compromiso es seguir siendo una voz que promueva la comprensión y el respeto por este mundo esencial.</p>
                    <div className="flex justify-center lg:hidden">
                        <Image
                            src={'/bandera/bandera.gif'}
                            alt="bandera"
                            width={250}
                            height={250}
                        />
                    </div>
                    <p className="flex justify-center bronze text-amber-700 lg:hidden"><strong>Pilar Ramos</strong></p>
                </section>
            </main>
            <hr />
            <br />
            <div className="grid grid-rows-3 justify-items-center">
                <Image
                    src="/logo/icono-pilar-ramos.png"
                    width={40}
                    height={10}
                    alt="Pilar Ramos Logo"
                />
                <br />
                <div className="flex">
                    <RedesSociales red={"https://www.instagram.com/pilaruramos"} icono={"/iconos/instagram.svg"} />
                    <RedesSociales red={"https://www.linkedin.com/in/pilaru-ramos-b9533474/?originalSubdomain=es"} icono={"/iconos/linkedin.svg"} />
                    <RedesSociales red={"https://www.youtube.com/@PilaruRamos"} icono={"/iconos/youtube.svg"} />
                    <RedesSociales red={"https://www.facebook.com/PilaruRamoss/"} icono={"/iconos/facebook.svg"} />
                    <RedesSociales red={"https://twitter.com/pilaruramos"} icono={"/iconos/twitter.svg"} />
                </div>
            </div>
        </div>
    )
}