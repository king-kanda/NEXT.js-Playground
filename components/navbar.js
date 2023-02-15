import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <div className="p-4">
                    <h1>
                        LOGO
                    </h1>
                </div>
                <div className="nav-hoolder">
                    <ul className="flex items-center justify-between">
                        <li className="p-4">
                            <Link href="/">home </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/about">About </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/work">  Work </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Navbar;