'use client'
import Link from "next/link";
import Logo from "@/components/ui/Logo"
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);


    };

    return (
        <section className="min-w-sm space-y-4">
            <div className="flex justify-center">
                <Logo />
            </div>
            <h1 className="text-center">Welcome Back</h1>
            <h1 className="text-center">Enter you credentials to access your portal</h1>
            <form className="space-y-2">
                <div>
                    <label htmlFor="">Name</label>
                    <div className="flex items-center gap-2 border  border-gray-200 py-2 px-2">
                        <FaRegUser size={20} />
                        <input type="email" className="focus:outline-none" placeholder="John Doe" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Email Address</label>
                    <div className="flex items-center gap-2 border  border-gray-200 py-2 px-2">
                        <MdOutlineEmail size={20} />
                        <input type="email" className="focus:outline-none" placeholder="name@company.com" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <div className="flex items-center gap-2 border  border-gray-200 py-2 px-2 justify-between">
                        <div className="flex items-center gap-2">
                            <RiLockPasswordLine size={20} />
                            <input type={showPassword ? "text" : "password"} className="focus:outline-none" placeholder="***********" />
                        </div>
                        {
                            showPassword ? (
                                <IoEyeOutline size={20} onClick={handleShowPassword} />
                            ) : (
                                <IoEyeOffOutline size={20} onClick={handleShowPassword} />
                            )
                        }
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" name="remember-me" className="focus:outline-none h-4 w-4" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <Button style="w-full cursor-pointer">Register</Button>
            </form>
            <p className="text-center">New to StyleGen? <Link href="/register" className="underline">Register</Link></p>
        </section>
    )
}

export default RegisterForm