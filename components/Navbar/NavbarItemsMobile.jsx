import Link from "next/link"
export default function NavbarItemsMobile({ path, description }) {
    return (
        <li className="block border-solid border-b-2 hover:font-bold !mt-4 pr-4 pb-2">
            <Link
                className="text-black items-center"
                href={path}
            >
                {description}
            </Link>
        </li>
    )
}
