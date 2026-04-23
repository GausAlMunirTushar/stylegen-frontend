import Link from "next/link"

interface ButtonProps {
    link?: string;
    children: React.ReactNode;
    style?: string;
}


const Button = ({ link = "/", children, style }: ButtonProps) => {
    return (
        <Link href={link}>
            <button className={`bg-primary py-2 px-4 text-white ${style}`}>
                {children}
            </button>
        </Link>
    )
}

export default Button