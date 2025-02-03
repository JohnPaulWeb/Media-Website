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

        </motion.nav>
    )
}