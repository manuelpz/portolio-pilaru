import Link from "next/link"
export default function NavbarItemsMobile({ path, description }) {
    return (
        <li className="block hover:bg-neutral-300 hover:font-bold">
            <Link
                className="text-black items-center"
                href={path}
            >
                {description}
            </Link>
        </li>
    )
}
