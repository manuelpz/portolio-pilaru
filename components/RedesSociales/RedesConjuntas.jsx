import RedesSociales from "./RedesSociales"
export default function RedesConjuntas() {
    return (
        <div className="flex">
            <RedesSociales red={"https://www.instagram.com/pilaruramos"} icono={"/iconos/instagram.svg"} />
            <RedesSociales red={"https://www.linkedin.com/in/pilaru-ramos-b9533474/?originalSubdomain=es"} icono={"/iconos/linkedin.svg"} />
            <RedesSociales red={"https://www.youtube.com/@PilaruRamos"} icono={"/iconos/youtube.svg"} />
            <RedesSociales red={"https://www.facebook.com/PilaruRamoss/"} icono={"/iconos/facebook.svg"} />
            <RedesSociales red={"https://twitter.com/pilaruramos"} icono={"/iconos/twitter.svg"} />
            <RedesSociales red={"https://www.threads.net/@pilaruramos"} icono={"/iconos/threads.svg"} />
        </div>
    )
}
