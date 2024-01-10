import Link from "next/link"
import Image from "next/image"
export default function RedesSociales({red, icono}) {
  return (
      <Link
          href={red}
          target="_blank">
          <Image src={icono}
              className="w-8 h-8 mr-4"
              alt="Link a Redes Sociales"
              width={10}
              height={1} />
      </Link>
  )
}
