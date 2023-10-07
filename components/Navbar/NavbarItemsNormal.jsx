import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function NavbarItemsNormal({ path, description }) {
    const pathname = usePathname()
    return (
        <Link
            className={
                pathname ==  path  ? "font-bold text-sky-600" : "nonActive"
            }
            href={path}
        >
            {description}
        </Link>
    )
}
