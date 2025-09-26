"use client"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="py-10 lg:w-4/5 mx-auto flex justify-between items-center">
            
            <Image 
                src="/logo-bookmark.svg" 
                alt="logo" 
                width={150} 
                height={50} 
                className="cursor-pointer m-6 lg:m-0"
            />

            
            <Image 
                onClick={() => setIsOpen(!isOpen)}
                src="/icon-hamburger.svg" 
                alt="menu" 
                width={20} 
                height={50} 
                className="cursor-pointer m-6 lg:hidden"
            />

            
            {isOpen && (
                <div className="fixed inset-0 bg-blue-900/80 text-white flex flex-col p-8 z-50">
                    
                    <div className="flex justify-between items-center">
                        <Image 
                            src="/logo-bookmark.svg" 
                            alt="logo" 
                            width={150} 
                            height={50} 
                        />
                        <Image 
                            onClick={() => setIsOpen(false)}
                            src="/icon-close.svg" 
                            alt="close" 
                            width={20} 
                            height={20} 
                            className="cursor-pointer"
                        />
                    </div>

                    
                    <ul className="flex flex-col gap-8 mt-20 text-center uppercase text-xl tracking-widest">
                        <li className="border-t border-white/50 pt-6 hover:text-red-400 cursor-pointer">Features</li>
                        <li className="border-t border-white/50 pt-6 hover:text-red-400 cursor-pointer">Pricing</li>
                        <li className="border-t border-white/50 pt-6 hover:text-red-400 cursor-pointer">Contact</li>
                        <li className="border-t border-white/50 pt-6">
                            <button className="w-full py-3 border-2 border-white rounded-lg uppercase hover:bg-white hover:text-blue-900 transition cursor-pointer">
                                Login
                            </button>
                        </li>
                    </ul>

                    
                    <div className="flex justify-center gap-8 mt-auto mb-10">
                        <Image src="/icon-facebook.svg" alt="facebook" width={25} height={25} className="cursor-pointer"/>
                        <Image src="/icon-twitter.svg" alt="twitter" width={25} height={25} className="cursor-pointer"/>
                    </div>
                </div>
            )}

            
            <div className="lg:flex gap-10 items-center hidden">
                <ul className="flex gap-4 uppercase items-center ">
                    <li className="hover:text-red-500 cursor-pointer">Features</li>
                    <li className="hover:text-red-500 cursor-pointer">Pricing</li>
                    <li className="hover:text-red-500 cursor-pointer">Contact</li>
                </ul>
                <button className="px-8 py-2 bg-red-500 text-white border-2 border-transparent 
                                   hover:border-2 hover:border-red-500 hover:bg-white hover:text-red-500
                                   uppercase rounded-lg shadow-lg cursor-pointer"> Login </button>
            </div>
        </div>
    )
}
