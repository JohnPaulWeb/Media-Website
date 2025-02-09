'use client'

import { jetbrainsMono, libreFranklin } from "@/app/fonts/fonts"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return(
        <section className="relative h-screen overflow-hidden">
            
            <div className="absolute inset-0"
             style={{ 
                backgroundImage: "url('Itoshi Rin.jpg')",
                WebkitBackgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${offset * 0.5}px)`,
              }}
            >

                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">

                <div className="max-w-3x1 space-y-6">
                    <h1 className={`${libreFranklin.className} text-4x1 md:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-up`}>
                        Ayanokoji  Kiyotaka
                    </h1>
                    <p className={`${libreFranklin.className} text-lg md:text-xl text-white/80 max-w-xl animate-fade-up animation-delay-100`}>
                    Let our shine be shine so that we can help each other and, love so we can enjoy the world.  
                    </p>
                    <Button className={`${jetbrainsMono.className} bg-white text-[#3D0C11] hover:bg-white/90 transition-colors animate-fade-up animate-delay-200`} size="lg">Explore your Experience</Button>
                </div>

                <div className="absolute bottom-32 right-4 md:right-16 max-w-md text-right animate-fade-up animate-delay-300">
                    <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-white leading-tight`}>
                        Journey your Home
                    </h2>
                </div>
            </div>
        </section>
    )
}