"use client"

import { libreFranklin, jetbrainsMono } from "../../fonts/fonts"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"


const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropDown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    


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
                <Link href="/" className={`${jetbrainsMono.className} text-2x1 font-bold text-[#3D0C11] transition-all duration-300 hover-scale-105`}>
                 Ayanokoji
                </Link>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link href={item.href} className={cn(
                                `${libreFranklin.className} text-sm transition-colors duration-300 group-hover:text-[#3D0C11]`, 
                                isScrolled ? "text-gray-700" : "text-white", "flex items-center"
                            )}
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}>

                                {item.name}
                                {item.subItems}


                                <ChevronDown className="ml-1 h-4 w-4" />

                            </Link>
                            {item.subItems && (
                                <AnimatePresence>
                                    {activeDropDown === item.name && (
                                        <motion.div
                                         initial={{ opacity: 0, y: -10 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         exit={{ opacity: 0, y: -10 }}
                                         transition={{ duration: 0.2 }}
                                         className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                         onMouseEnter={() => setActiveDropdown(item.name)}
                                         onMouseLeave={() => setActiveDropdown(null)}>
                                            

                                            <div className="py-1">
                                                {item.subItems.map((subItem) => (
                                                    <Link key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                         </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden md:block">

                    <Button className={cn(
                        `${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-all duration-300`, 
                        !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20", "hover:scale-105"
                    )}
                    >
                       Are you Ready?
                    </Button>
                </div>

                <button className="md:hidden text-[#3D0C11] transition-transform duration-300 hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>


        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 0, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{  duration: 0.3 }}
                 className={`${libreFranklin.className} md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden`}>

                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4"> 
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link href={item.href} className="text-gray-700 hover:text-[#3D0C11] transition-colors duration-300 block"
                                 onClick={() => setIsOpen(false)}>
                                    {item.name}
                                 </Link>
                                 {item.subItems && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {item.subItems.map((subItem) => (
                                            <Link key={subItem.name}
                                            href={subItem.href}
                                            className="text-gray-600 hover:text-[#3D0C11] transition-colors duration-300 block text-sm"
                                            onClick={() => setIsOpen(false)}>
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                 )}
                            </div>
                        ))}

                        <Button className={`${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[2D090D] transition-colors w-full`}
                        onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                 </motion.div>
            )}
        </AnimatePresence>
        </motion.nav>
    )
}