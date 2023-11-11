import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function NavbarItemsMobile({ path, description, setIsMenuOpen }) {
    let pathname = usePathname()
    pathname = pathname == "/" ? "/about" : pathname
    return (
        <li>
            <Link
                className={`block border-solid border-b-2 hover:font-bold !mt-4 pr-4 pb-2
                    ${pathname == path ? "font-bold text-sky-600" : "nonActive"}`
                }
                href={path}
                onClick={setIsMenuOpen}
            >
                {description}
            </Link>
        </li>
    )
}
