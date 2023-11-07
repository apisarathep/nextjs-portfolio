import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} 
        className='block py-2 pl-3 pr-4 text-slate-200 sm:text-xl rounded md:p-0 hover:text-pink-500 transition' >
        {title}
        </Link>
    )
}

export default NavLink;

