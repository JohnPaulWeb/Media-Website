"use client"

import { JetBrains_Mono } from "next/font/google"
import Link from "next/link"
import { useState } from "react"



import { motion } from "framer-motion"


const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)


    return (

        <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6 }}
         className={cn(
            "fixed w-full z-50 transition-all duration-300", isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
         )}
        
         
         >

        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <Link href="/" className={`${JetBrains_Mono.className} text-2x1 font-bold text-[#3D0C11] transition-all duration-300 hover-scale-105`}>
                  Modia
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </motion.nav>
    )
}