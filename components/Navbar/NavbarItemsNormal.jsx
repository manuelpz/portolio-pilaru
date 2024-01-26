import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function NavbarItemsNormal({ path, description }) {
    const regexArticulos = /^\/articulos\/(\d+)$/
    const regexVideos = /^\/videos\/(\d+)$/
    const regexPodcasts = /^\/podcasts\/(\d+)$/

    let pathname = usePathname()
    pathname = pathname == "/" ? "/about" : pathname
    pathname = regexArticulos.test(pathname) ? "/articulos" : pathname
    pathname = regexVideos.test(pathname) ? "/videos" : pathname
    pathname = regexPodcasts.test(pathname) ? "/podcasts" : pathname


    return (

        <p className="grid">
            <Link
                className={`transition hover:-translate-y-1 hover:scale-150 ${pathname == path ? "font-bold text-sky-600 " : "nonActive"}`}
                href={path}
            >
                {description}
            </Link>
        </p>
    )
}
