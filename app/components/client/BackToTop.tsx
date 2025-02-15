"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function BackToTop() {


    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
        {isVisible && (
            <Button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-[#3D0C11] text-white rounded-full shadow-lg hover:bg-[#2D090D] transition-all duration-300 z-50" 
            aria-label="Back to top">


                <ChevronUp className="h-6 w-6" />
            </Button>
        )}
        </>
    )
}