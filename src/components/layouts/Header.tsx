import Link from "next/link"
import Logo from "@/components/ui/Logo"
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <header className="max-w-6xl mx-auto py-4">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-14">
                    <Logo />
                    <ul className="flex items-center gap-5 text-lg uppercase">
                        <li>
                            <Link href="/products"> Products</Link>
                        </li>
                        <li>
                            <Link href="/categories"> Categories</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <IoSearch />

                    <p className="bg-orange-100 text-primary h-8 w-8 flex items-center justify-center rounded-full" ><FiShoppingCart /></p>
                    <Link href="/login">Login</Link>
                </div>
            </nav>
        </header>
    )

}
export default Header;